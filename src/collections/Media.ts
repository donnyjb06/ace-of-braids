import type { CollectionConfig } from 'payload'
import { uploadToSupabase } from '@/lib/payload/uploadToSupabase'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: true,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: "type",
      type: "select",
      required: true,
      options: [
        "hero",
        "gallery",
        "profiles",
        "services",
        "testimonials",
      ]
    },
    {
      name: "url",
      type: "text",
      required: false,
      admin: {
        readOnly: true,
      }

    }
  ],
}
