import { defineConfig, defineType } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
  name: "conversiondoc",
  title: "ConversionDoc Studio",
  projectId: "r1zrln51",
  dataset: "production",
  plugins: [structureTool()],
  schema: {
    types: [
      defineType({
        name: "post",
        title: "Post",
        type: "document",
        fields: [
          {
            name: "title",
            title: "Title",
            type: "string",
          },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
          },
          {
            name: "publishedAt",
            title: "Published at",
            type: "datetime",
          },
          {
            name: "body",
            title: "Body",
            type: "array",
            of: [{ type: "block" }],
          },
        ],
      }),
    ],
  },
});
