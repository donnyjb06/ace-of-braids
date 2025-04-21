import { Media } from '@/collections/Media'
import { max } from '@payloadcms/db-postgres/drizzle'
import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero-block',
  interfaceName: 'HeroBlock',
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
      name: 'flipText',
      type: 'array',
      fields: [
        {
          name: 'subheading',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'body',
      type: 'textarea',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      maxDepth: 2,
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
    {
      name: 'variant',
      type: 'select',
      required: true,
      defaultValue: 'landing',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
      ],
    },
  ],
}
