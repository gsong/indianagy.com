import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import PortfolioPicture from "./PortfolioPicture.astro";

const SRC = "https://assets.indianagy.com/case-studies/skippy/card.png";

const ROLES = [
  { role: "card", widest: 1280, sizes: "(max-width: 640px) 100vw, 50vw" },
  { role: "section", widest: 2560, sizes: "(max-width: 1280px) 100vw, 1280px" },
  { role: "portrait", widest: 1280, sizes: "60ch" },
] as const;

describe("PortfolioPicture", () => {
  beforeEach(() => serveOriginal({ width: 9866, height: 6000 }));
  afterEach(() => vi.unstubAllGlobals());

  describe.each(ROLES)("$role role", ({ role, widest, sizes }) => {
    it("limits the widest srcset width to the role's limit", async () => {
      const img = await render(role);

      expect(Math.max(...img.srcsetWidths)).toBe(widest);
    });

    it("points every URL at the Netlify Image CDN", async () => {
      const img = await render(role);

      for (const url of [img.src, ...img.srcsetUrls]) {
        expect(url).toMatch(/^\/\.netlify\/images\?/);
      }
    });

    it("leaves the format for Netlify to negotiate", async () => {
      const img = await render(role);

      for (const url of [img.src, ...img.srcsetUrls]) {
        expect(new URLSearchParams(url.split("?")[1]).has("fm")).toBe(false);
      }
    });

    it("sets sizes for the role", async () => {
      const img = await render(role);

      expect(img.sizes).toBe(sizes);
    });
  });

  it("never asks for a picture wider than its original", async () => {
    serveOriginal({ width: 900, height: 600 });

    const img = await render("section");

    expect(Math.max(...img.srcsetWidths)).toBe(900);
  });

  it("lazy-loads with the given alt text", async () => {
    const img = await render("card");

    expect(img.alt).toBe("Skippy card");
    expect(img.loading).toBe("lazy");
  });
});

const render = async (role: (typeof ROLES)[number]["role"]) => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(PortfolioPicture, {
    props: { src: SRC, alt: "Skippy card", role },
  });
  return parseImg(html);
};

const parseImg = (html: string) => {
  const tag = html.match(/<img\b[^>]*>/)?.[0];
  if (!tag) throw new Error(`No <img> in: ${html}`);

  const attr = (name: string) =>
    tag
      .match(new RegExp(`\\s${name}="([^"]*)"`))?.[1]
      ?.replaceAll("&amp;", "&");
  const candidates = (attr("srcset") ?? "")
    .split(", ")
    .filter(Boolean)
    .map((candidate) => candidate.split(" "));

  return {
    src: attr("src") ?? "",
    alt: attr("alt"),
    sizes: attr("sizes"),
    loading: attr("loading"),
    srcsetUrls: candidates.map(([url]) => url),
    srcsetWidths: candidates.map(([, descriptor]) =>
      Number.parseInt(descriptor, 10),
    ),
  };
};

/** Stubs the network so the size probe reads a PNG header instead of R2. */
const serveOriginal = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async (request: Request) => {
      const response = new Response(pngHeader(width, height), {
        headers: { "content-type": "image/png" },
      });
      Object.defineProperty(response, "url", { value: request.url });
      return response;
    }),
  );
};

const pngHeader = (width: number, height: number) => {
  const bytes = new Uint8Array(33);
  const view = new DataView(bytes.buffer);
  bytes.set([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  view.setUint32(8, 13);
  bytes.set(new TextEncoder().encode("IHDR"), 12);
  view.setUint32(16, width);
  view.setUint32(20, height);
  bytes.set([8, 6, 0, 0, 0], 24);
  return bytes;
};
