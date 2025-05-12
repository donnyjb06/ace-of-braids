'use server'

import config from '@payload-config'
import { getPayload } from 'payload'

export const getGalleryImages = async () => {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const images = await payload.find({
      collection: 'media',
      depth: 1,
      pagination: false,
      limit: 12,
      where: {
        type: {
          equals: 'gallery'
        }
      }
    })

    if (!images) {
      console.error('An error has occured: Images not found!')
      throw new Error('An error has occured: Images not found!')
    }

    return images;
  } catch (error) {
    if (error instanceof Error) {
      throw error
    } else {
      throw new Error("An unknown error has occured!")
    }
  }
}
