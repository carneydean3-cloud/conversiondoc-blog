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
            name: "metaDescription",
            title: "Meta Description",
            type: "text",
            rows: 3,
            description: "150-160 characters recommended for SEO",
          },
          {
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
          },

          // ── CTA CONTROL ──────────────────────────────────────────
          {
            name: "primaryTool",
            title: "Primary CTA tool",
            type: "string",
            initialValue: "geo",
            options: {
              layout: "radio",
              list: [
                { title: "GEO AI", value: "geo" },
                { title: "Conversion", value: "conversion" },
                { title: "None", value: "none" },
              ],
            },
            description:
              "Which tool should the article push as the primary next step?",
          },
          {
            name: "ctaPlacement",
            title: "CTA placement",
            type: "string",
            initialValue: "both",
            options: {
              layout: "radio",
              list: [
                { title: "After TL;DR + end", value: "both" },
                { title: "End only", value: "end" },
                { title: "Off", value: "off" },
              ],
            },
            description:
              "Controls whether CTA blocks are injected automatically into the post layout.",
          },
          // ─────────────────────────────────────────────────────────

          {
            name: "body",
            title: "Body",
            type: "array",
            of: [
              { type: "block" },
              {
                type: "image",
                title: "Image",
                options: { hotspot: true },
              },
              {
                name: "callout",
                type: "object",
                title: "Callout (TL;DR)",
                fields: [
                  {
                    name: "style",
                    type: "string",
                    title: "Style",
                    options: {
                      list: [
                        { title: "TL;DR (Blue)", value: "tldr" },
                        { title: "Action (Green)", value: "action" },
                        { title: "Warning (Amber)", value: "warning" },
                      ],
                      layout: "radio",
                    },
                    initialValue: "tldr",
                  },
                  {
                    name: "text",
                    type: "array",
                    title: "Content",
                    of: [{ type: "block" }],
                  },
                ],
              },
            ],
          },
        ],
      }),
    ],
  },
});
