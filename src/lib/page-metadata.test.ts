import { describe, expect, it } from "vitest";

import { defineDetailKind } from "@/resources/detail-kind";

import { pageMetadata } from "./page-metadata";
import { CDN_RESOURCES, R2_ORIGIN } from "./r2";

const SITE = "https://indianagy.com";

describe("pageMetadata", () => {
  describe("for a site page", () => {
    const metadata = pageMetadata({ site: SITE, pageUrl: `${SITE}/about/` });

    it("uses the site title", () => {
      expect(metadata.title).toBe(
        "India Nagy | Art Director & Graphic Designer",
      );
    });

    it("shares the social card uncropped", () => {
      expect(metadata.ogImage).toEqual({
        src: CDN_RESOURCES.SOCIAL_CARD,
        width: 1280,
        height: 672,
        crop: false,
      });
    });

    it("describes India as a person", () => {
      expect(metadata.jsonLd).toEqual([
        expect.objectContaining({
          "@type": "Person",
          name: "India Nagy",
          url: SITE,
        }),
      ]);
    });
  });

  describe("for a detail page", () => {
    const kind = defineDetailKind({
      name: "Expertise",
      route: "expertise",
      r2Folder: "expertise",
      details: [
        {
          label: "Print",
          folder: "print",
          card: "card.jpg",
          highlights: [],
          sections: [],
          description: () => null,
          metaDescription: "Print work.",
        },
      ],
    });
    const { detail } = kind.page("print");
    const pageUrl = `${SITE}/expertise/print/`;
    const metadata = pageMetadata({ site: SITE, pageUrl, detail });

    it("names India, the kind and the detail in the title", () => {
      expect(metadata.title).toBe("India Nagy | Expertise | Print");
    });

    it("uses the detail's meta description", () => {
      expect(metadata.description).toBe("Print work.");
    });

    it("shares the card picture cropped to 1200 × 630", () => {
      expect(metadata.ogImage).toEqual({
        src: `${R2_ORIGIN}/expertise/print/card.jpg`,
        width: 1200,
        height: 630,
        crop: true,
      });
    });

    it("describes the detail as India's creative work", () => {
      expect(metadata.jsonLd[1]).toEqual({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "Print",
        author: { "@type": "Person", name: "India Nagy" },
        description: "Print work.",
        image: `${R2_ORIGIN}/expertise/print/card.jpg`,
        url: pageUrl,
      });
    });
  });
});
