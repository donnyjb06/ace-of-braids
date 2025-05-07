import { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'gallery-block',
  interfaceName: 'GalleryBlock',
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
    },
    {
      name: 'sectionHeading',
      label: 'Section Heading',
      type: 'text',
    },
    {
      name: 'ctaUrl',
      label: 'CTA URL',
      type: 'text',
    },
    {
      name: 'ctaLabel',
      label: 'CTA Label',
      type: 'text',
    },
  ],
}
