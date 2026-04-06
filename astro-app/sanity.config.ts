import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "conversiondoc",
  title: "ConversionDoc Studio",
  projectId: "r1zrln51",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [],
  },
});
