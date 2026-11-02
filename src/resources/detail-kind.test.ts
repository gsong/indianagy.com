import { existsSync } from "node:fs";

import { describe, expect, it } from "vitest";

import { R2_ORIGIN } from "@/lib/r2";

import { caseStudies } from "./case-studies";
import { type DetailSource, defineDetailKind } from "./detail-kind";
import { expertise } from "./expertise";

describe("defineDetailKind", () => {
  const kind = defineDetailKind({
    name: "Case Study",
    route: "case-study",
    r2Folder: "case-studies",
    details: [
      source({ label: "Alpha Bars", folder: "alpha" }),
      source({ label: "Beta!", folder: "beta" }),
      source({ label: "Gamma", folder: "gamma" }),
    ],
  });

  it("gives each detail a slug and an href under the kind's route", () => {
    expect(kind.details.map(({ slug, href }) => ({ slug, href }))).toEqual([
      { slug: "alpha-bars", href: "/case-study/alpha-bars" },
      { slug: "beta", href: "/case-study/beta" },
      { slug: "gamma", href: "/case-study/gamma" },
    ]);
  });

  it("builds static paths in listing order, each carrying its page", () => {
    const paths = kind.staticPaths();

    expect(paths.map(({ params }) => params.slug)).toEqual([
      "alpha-bars",
      "beta",
      "gamma",
    ]);
    expect(paths[1].props.page.detail.label).toBe("Beta!");
  });

  it("links each page to its neighbours, with none past either end", () => {
    const labels = (slug: string) => {
      const { previous, detail, next } = kind.page(slug);
      return [previous?.label ?? null, detail.label, next?.label ?? null];
    };

    expect(labels("alpha-bars")).toEqual([null, "Alpha Bars", "Beta!"]);
    expect(labels("beta")).toEqual(["Alpha Bars", "Beta!", "Gamma"]);
    expect(labels("gamma")).toEqual(["Beta!", "Gamma", null]);
  });

  it("refuses an unknown slug", () => {
    expect(() => kind.page("delta")).toThrow(
      'No Case Study has the slug "delta"',
    );
  });

  it("refuses two details whose labels slugify alike", () => {
    expect(() =>
      defineDetailKind({
        name: "Expertise",
        route: "expertise",
        r2Folder: "expertise",
        details: [
          source({ label: "Print", folder: "a" }),
          source({ label: "print", folder: "b" }),
        ],
      }),
    ).toThrow('Two Expertise details share the slug "print"');
  });

  it("resolves pictures inside the detail's R2 folder", () => {
    const { card, sections } = kind.page("beta").detail;

    expect(card).toBe(`${R2_ORIGIN}/case-studies/beta/card.png`);
    expect(sections[0].images).toEqual([
      { src: `${R2_ORIGIN}/case-studies/beta/one.png`, alt: "One" },
    ]);
  });

  it("resolves each video name to its poster, WebM and MP4", () => {
    expect(kind.page("beta").detail.sections[1].videos).toEqual([
      {
        alt: "Clip",
        poster: "/videos/clip.jpg",
        webm: "/videos/clip.webm",
        mp4: "/videos/clip.mp4",
      },
    ]);
  });

  it("labels each card with the detail and its kind", () => {
    expect(kind.cards()[0]).toEqual({
      label: "Alpha Bars",
      href: "/case-study/alpha-bars",
      picture: `${R2_ORIGIN}/case-studies/alpha/card.png`,
      ariaLabel: "View Alpha Bars case study",
    });
  });
});

describe("the site's detail kinds", () => {
  it("have a poster, WebM and MP4 in public/ for every video", () => {
    const videos = [...caseStudies.details, ...expertise.details].flatMap(
      ({ sections }) => sections.flatMap(({ videos }) => videos ?? []),
    );

    expect(videos.length).toBeGreaterThan(0);
    for (const { poster, webm, mp4 } of videos) {
      for (const url of [poster, webm, mp4]) {
        expect(
          existsSync(new URL(`../../public${url}`, import.meta.url)),
          url,
        ).toBe(true);
      }
    }
  });
});

function source({
  label,
  folder,
}: {
  label: string;
  folder: string;
}): DetailSource {
  return {
    label,
    folder,
    card: "card.png",
    highlights: [],
    sections: [
      { label: "Pictures", images: [{ src: "one.png", alt: "One" }] },
      { label: "Videos", videos: [{ src: "clip", alt: "Clip" }] },
    ],
    description: () => null,
    metaDescription: `${label} description`,
  };
}
