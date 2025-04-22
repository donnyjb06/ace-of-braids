import { Block } from "payload";

export const AboutBlock: Block = {
  slug: 'about-block',
  interfaceName: 'AboutBlock',
  labels: {
    singular: 'About Section',
    plural: 'About Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'section-heading',
      type: 'text',
      required: true,
    },
    {
      name: 'body',
      type: 'textarea'
    },
    {
      name: 'textBlocks',
      type: 'array',
      maxRows: 4,
      fields: [
        {
          name: 'textBlock',
          type: 'textarea',
        }
      ]
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
      defaultValue: 'primary',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
      ],
    },
  ],
} 