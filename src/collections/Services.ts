import { CollectionConfig } from 'payload'

enum BraidTypes {
  StitchFull = 'stitchFull',
  StitchHalf = 'stitchHalf',
  Fulani = 'fulani',
  Knotless = 'knotless',
  Boho = 'boho',
  Rave = 'rave',
  TouchUp = 'touchUp',
  NotListed = 'notListed',
}

const usesAmount = [BraidTypes.StitchFull, BraidTypes.StitchHalf]
const usesSize = [BraidTypes.Fulani, BraidTypes.Knotless, BraidTypes.Boho]

export const Services: CollectionConfig = {
  slug: 'services',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'braidType',
      type: 'radio',
      required: true,
      options: [
        { label: 'Stitch Braids(Half)', value: BraidTypes.StitchHalf },
        { label: 'Stitch Braids(Full)', value: BraidTypes.StitchFull },
        { label: 'Knotless Braids', value: BraidTypes.Knotless },
        { label: 'Fulani Braids', value: BraidTypes.Fulani },
        { label: 'Boho Braids', value: BraidTypes.Boho },
        { label: 'Rave Braids', value: BraidTypes.Rave },
        { label: 'Touch Up', value: BraidTypes.TouchUp },
        { label: 'Not Listed', value: BraidTypes.NotListed },
      ],
    },

    {
      name: 'braidAmount',
      type: 'array',
      fields: [
        {
          name: 'amount',
          type: 'text',
        },
        {
          name: 'price',
          type: 'number',
        },
        {
          name: 'stripePriceId',
          label: 'Stripe Price ID',
          type: 'text',
        },
        {
          name: 'needContact',
          type: 'radio',
          options: [
            { label: 'Yes', value: 'true' },
            { label: 'No', value: 'false' },
          ],
        },
      ],

      admin: {
        condition: (data) => {
          return usesAmount.includes(data?.['braidType'])
        },
      },
    },
    {
      name: 'braidSize',
      type: 'array',
      fields: [
        {
          name: 'size',
          type: 'text',
        },
        {
          name: 'price',
          type: 'number',
        },
        {
          name: 'stripePriceId',
          label: 'Stripe Price ID',
          type: 'text',
        },
      ],

      admin: {
        condition: (data) => {
          return usesSize.includes(data?.['braidType'])
        },
      },
    },
    {
      name: 'addonsList',
      type: 'array',
      fields: [
        {
          name: 'addon',
          label: 'Addon',
          type: 'relationship',
          relationTo: 'addons',
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'thumbnail',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'needContact',
      label: 'Contact Directly?',
      type: 'radio',
      options: [
        { label: 'Yes', value: 'true' },
        { label: 'No', value: 'false' },
      ],
    },
  ],
}
