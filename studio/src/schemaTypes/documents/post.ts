import { defineField, defineType } from "sanity";

/**
 * Post schema. Define and edit the fields for the 'post' content type.
 * Learn more: https://www.sanity.io/docs/schema-types
 */

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
      },
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 4,
    }),

    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
        }),
      ],
    }),

    /**
     * CTA control (used by Astro blog templates)
     */
    defineField({
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
    }),

    defineField({
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
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
