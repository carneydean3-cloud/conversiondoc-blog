import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    sanity({
      projectId: "r1zrln51",
      dataset: "production",
      useCdn: true,
      studioBasePath: "/studio",
    }),
    react(),
  ],
});
