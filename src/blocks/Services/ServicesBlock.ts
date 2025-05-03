import { Block } from "payload";

export const ServicesBlock: Block = {
  slug: "services-block",
  interfaceName: "ServicesBlock",
  fields: [
    {
      name: 'sectionHeading',
      label: 'Section Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaLabel',
      label: 'CTA Label',
      type: 'text',
    },
    {
      name: 'ctaUrl',
      label: "CTA URL",
      type: 'text',
    }
  ]
}