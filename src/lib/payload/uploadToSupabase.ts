"use server"

import { BeforeChangeHook } from 'node_modules/payload/dist/collections/config/types'
import { uploadFile } from '../supabase/uploadFile'

export const uploadToSupabase: BeforeChangeHook = async ({ data, req, operation }) => {
  if (operation === 'create' || req?.file) {
    const folder = data.type

    if (!req.file) {
      console.error('File could not be found')
      throw new Error('No file found in the request.')
    }

    const filename = `${Date.now()}-${req.file?.name}`
    const supabasePath = `${folder}/${filename}`

    try {
      const publicUrl = await uploadFile(req.file.data, supabasePath)
      data.url = publicUrl

      if (!data.url) {
        throw new Error("Image upload failed - no URL generated.")
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error has occured when attempting to save photo to Supabase storage')
        throw error
      } else {
        console.error("An unknown error has occured.")
        throw new Error("An unknown error has occured.")
      }
    }
  }
}


