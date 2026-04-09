import {defineType, defineArrayMember, defineField} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [
        {title: 'Bullet', value: 'bullet'},
        {title: 'Numbered', value: 'number'},
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          defineField({
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              defineField({
                title: 'URL',
                name: 'href',
                type: 'url',
              }),
            ],
          }),
        ],
      },
    }),

    // Inline images inside the body
    defineArrayMember({
      type: 'image',
      title: 'Image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
        }),
        defineField({
          name: 'caption',
          title: 'Caption',
          type: 'string',
        }),
      ],
    }),

    // NEW: Custom Callout / TL;DR Block
    defineArrayMember({
      name: 'callout',
      type: 'object',
      title: 'Callout (TL;DR)',
      fields: [
        defineField({
          name: 'style',
          type: 'string',
          title: 'Style',
          options: {
            list: [
              { title: 'TL;DR (Blue)', value: 'tldr' },
              { title: 'Action (Green)', value: 'action' },
              { title: 'Warning (Amber)', value: 'warning' }
            ],
            layout: 'radio'
          },
          initialValue: 'tldr'
        }),
        defineField({
          name: 'text',
          type: 'array',
          title: 'Content',
          of: [{ type: 'block' }] // Allows rich text (bold, bullets) inside the callout
        })
      ]
    })
  ],
})
