import {useEffect, useRef} from 'react'
import {defineField, defineType, set, unset} from 'sanity'

function textToBlocks(text) {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph, index) => ({
      _type: 'block',
      _key: `description-${index}`,
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: `description-span-${index}`,
          text: paragraph.replace(/\s*\n\s*/g, ' '),
          marks: [],
        },
      ],
    }))
}

function DescriptionInput(props) {
  const {value, onChange, renderDefault} = props
  const converted = useRef(false)

  useEffect(() => {
    if (converted.current || typeof value !== 'string') return
    converted.current = true
    const blocks = textToBlocks(value)
    onChange(blocks.length ? set(blocks) : unset())
  }, [onChange, value])

  if (typeof value === 'string') {
    return renderDefault({...props, value: textToBlocks(value)})
  }

  return renderDefault(props)
}

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      description: 'Static layer behind the site screenshot. Does not tilt on hover.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Leave blank if decorative.',
        },
      ],
    }),
    defineField({
      name: 'foregroundImage',
      title: 'Foreground Image',
      type: 'image',
      description: 'Site screenshot or UI layer. Gets the perspective tilt on hover.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tools',
      title: 'Tools & Technologies',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'link',
      title: 'Project URL',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'Highlight text and choose the link icon to add an inline link.',
      components: {
        input: DescriptionInput,
      },
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  defineField({
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto'],
                      }),
                  }),
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'Which view this project appears in.',
      options: {
        list: [
          {title: 'Shopify', value: 'shopify'},
          {title: 'Next.js', value: 'nextjs'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Projects are shown newest to oldest.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'foregroundImage',
      platform: 'platform',
      date: 'date',
    },
    prepare(selection) {
      const {title, media, platform, date} = selection
      const platformLabel =
        platform === 'shopify' ? 'Shopify' : platform === 'nextjs' ? 'Next.js' : 'No platform'
      const dateLabel = date
        ? new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
          })
        : 'No date'
      return {
        title,
        subtitle: `${platformLabel} · ${dateLabel}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Date, Newest',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: 'Platform',
      name: 'platformAsc',
      by: [
        {field: 'platform', direction: 'asc'},
        {field: 'date', direction: 'desc'},
      ],
    },
  ],
})
