import { readFileSync } from "node:fs";

import { parse } from "smol-toml";
import { describe, expect, it } from "vitest";

import { caseStudies } from "@/resources/case-studies";
import { expertise } from "@/resources/expertise";

import { CDN_RESOURCES, R2_ORIGIN } from "./r2";

describe("portfolio pictures on R2", () => {
  it("all live on the R2 origin that Astro may fetch", () => {
    for (const url of portfolioPictures()) {
      expect(new URL(url).origin).toBe(R2_ORIGIN);
    }
  });

  it("are all allowed by the Netlify Image CDN allowlist", () => {
    const allowlist = netlifyRemoteImages();

    for (const url of portfolioPictures()) {
      expect(
        allowlist.some((pattern) => pattern.test(url)),
        url,
      ).toBe(true);
    }
  });

  it("share no allowlist entry with a lookalike host", () => {
    const lookalike = `${R2_ORIGIN}.example.com/card.png`;

    expect(netlifyRemoteImages().some((p) => p.test(lookalike))).toBe(false);
  });
});

const portfolioPictures = () => [
  CDN_RESOURCES.ABOUT_IMAGE,
  ...[...caseStudies, ...expertise].flatMap((detail) => [
    detail.imgSrc,
    ...detail.sections.flatMap(
      (section) => section.images?.map(({ src }) => src) ?? [],
    ),
  ]),
];

const netlifyRemoteImages = () => {
  const toml = readFileSync(
    new URL("../../netlify.toml", import.meta.url),
    "utf8",
  );
  const { images } = parse(toml) as { images: { remote_images: string[] } };
  return images.remote_images.map((pattern) => new RegExp(pattern));
};
