import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'footer', title: 'Footer'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'footerLeft',
      title: 'Footer Left',
      type: 'object',
      group: 'footer',
      description: 'Illustration on the left side of the footer. Uses the GIF when set; otherwise the static image.',
      fields: [
        defineField({
          name: 'staticImage',
          title: 'Static Image',
          type: 'image',
          description: 'Fallback when no GIF is set.',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'gif',
          title: 'GIF',
          type: 'file',
          description: 'Loops continuously in the footer.',
          options: {
            accept: 'image/gif',
          },
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the illustration for screen readers.',
        }),
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'seo',
      fields: [
        defineField({
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
          description: 'Browser tab title and primary search title. Aim for under 60 characters.',
          validation: (Rule) => Rule.max(70).warning('Keep under 60–70 characters for search results.'),
        }),
        defineField({
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
          description: 'Search result snippet. Aim for under 160 characters.',
          validation: (Rule) =>
            Rule.max(160).warning('Keep under 160 characters for search results.'),
        }),
        defineField({
          name: 'ogTitle',
          title: 'Open Graph Title',
          type: 'string',
          description: 'Title used when shared on social. Falls back to Meta Title if empty.',
        }),
        defineField({
          name: 'ogDescription',
          title: 'Open Graph Description',
          type: 'text',
          rows: 3,
          description: 'Description used when shared on social. Falls back to Meta Description if empty.',
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Image shown when the site is shared on social (recommended 1200×630).',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        }),
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
          options: {
            layout: 'tags',
          },
          description: 'Optional keywords for meta keywords (limited SEO value today).',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
