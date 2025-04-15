"use server"

import { supabase } from './supabaseClient'

export const uploadFile = async (file: Buffer, filepath: string) => {
  if (!process.env.SUPABASE_BUCKET) {
    throw new Error('Environment variable containing Supabase bucket could not be found.')
  }
  const { error } = await supabase.storage.from(process.env.SUPABASE_BUCKET).upload(filepath, file)

  if (error) {
    throw new Error('Error has occured when attempting to upload your file')
  } else {
    const { data: publicData } = supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .getPublicUrl(filepath)
    return publicData.publicUrl
  }
}