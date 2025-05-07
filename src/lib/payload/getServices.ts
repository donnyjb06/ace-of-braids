"use server";

import { getPayload } from "payload";
import config from '@payload-config';

export const getServices = async () => {
  const payloadConfig = await config;
  const payload = await getPayload({ config: payloadConfig })

  try {
    const services = await payload.find({
      collection: 'services',
    })
  
    if (!services) {
      console.error('An error has occured: Services not found!')
      throw new Error('An error has occured: Services not found!')
    }

    return services;
  } catch (error) {
    if (error instanceof Error) {
      console.error("An error has occured:", error.message)
      throw error
    } else {
      console.error("An unknown error has occured when attempting to fetch services!")
      throw new Error("An unknown error has occured when attempting to fetch services!")
    }
  }
  
}