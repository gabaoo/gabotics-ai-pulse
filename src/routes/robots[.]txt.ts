import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Serve a host-aware robots.txt:
// - On the canonical domain (gabotics.com) → allow indexing + point to sitemap.
// - On any other host (preview/lovable.app/staging) → disallow all crawlers
//   so SEO authority concentrates on gabotics.com.
export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const host = new URL(request.url).host.toLowerCase();
        const isCanonical = host === "gabotics.com" || host === "www.gabotics.com";

        const body = isCanonical
          ? [
              "User-agent: *",
              "Allow: /",
              "",
              "Sitemap: https://gabotics.com/sitemap.xml",
              "",
            ].join("\n")
          : [
              "# Non-canonical host. Indexing is disabled to consolidate SEO",
              "# authority on https://gabotics.com",
              "User-agent: *",
              "Disallow: /",
              "",
            ].join("\n");

        return new Response(body, {
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
            "X-Robots-Tag": isCanonical ? "all" : "noindex, nofollow",
          },
        });
      },
    },
  },
});