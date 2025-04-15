import { Media } from '@/collections/Media'
import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero-block',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'text',
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: 'media'
        }
      ],
    },
    {
      name: "cta",
      type: "group",
      fields: [
        {
          name: "label",
          type: "text"
        },
        {
          name: "url",
          type: "text"
        }
      ]
    },
    {
      name: "variant",
      type: "select",
      required: true,
      defaultValue: "landing",
      options: [
        { label: 'Landing', value: 'landing' },
        { label: 'About', value: 'about' },
        { label: 'Services', value: 'services' },
        { label: 'Gallery', value: 'gallery' },
        { label: 'Booking', value: 'booking' },
        { label: 'Policy', value: 'policy' },
      ]

    }
  ],
}
