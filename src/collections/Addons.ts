import { label } from 'motion/react-client'
import type { CollectionConfig } from 'payload'

export const Addons: CollectionConfig = {
  slug: 'addons',
  fields: [
    {
      name: 'addonType',
      type: 'radio',
      label: 'Addon Type',
      options: [
        { label: 'Length', value: 'length' },
        { label: 'Boho Amount', value: 'bohoAmount' },
        { label: 'Beads', value: 'beads' },
        { label: 'Quick Trim', value: 'quickTrim' },
      ],
      required: true,
    },
    {
      name: 'options',
      type: 'array',
      label: 'Addon Options',
      fields: [
        {
          name: 'addonOption',
          label: 'Addon Name',
          type: 'text',
        },
        {
          name: 'addonPrice',
          label: 'Addon Price',
          type: 'number',
        },
        {
          name: 'stripePriceId',
          label: "Stripe Price ID",
          type: 'text',
        },
        {
          name: 'needContact',
          label: 'Needs To Contact Directly',
          type: 'radio',
          options: [
            { label: 'Yes', value: 'true' },
            { label: 'No', value: 'false' },
          ],
        },
      ],

      admin: {
        condition: (data) => {
          return data?.['addonType'] === 'length' || data?.['addonType'] === 'bohoAmount'
        },
      },
    },

    {
      name: 'addonPrice',
      type: 'number',
      label: 'Addon Price',

      admin: {
        condition: (data) => {
          return data?.['addonType'] === 'beads' || data?.['addonType'] === 'quickTrim'
        },
      },
    },
    {
      name: 'stripePriceId',
      type: 'text',
      label: 'Stripe Price ID',

      admin: {
        condition: (data) => {
          return data?.['addonType'] === 'beads' || data?.['addonType'] === 'quickTrim'
        },
      },
    },
  ],
}
