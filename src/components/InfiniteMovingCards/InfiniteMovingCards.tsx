'use client'

import { getServices } from '@/lib/payload/getServices'
import { Service } from '@/payload-types'
import React, { useCallback } from 'react'
import ServiceCard from '../ServiceCard/ServiceCard'
import styles from "./InfiniteMovingCards.module.scss"

const InfiniteMovingCards = () => {
  const [services, setServices] = React.useState<Service[] | []>([])

 

  React.useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices()
        setServices(response.docs)
      } catch (error) {
        if (error instanceof Error) {
          console.error('An error has occured:', error.message)
        } else {
          console.error('An unknown error has occured.')
        }
      }
    }

    fetchServices()
  }, [])

  const renderCards = useCallback(() => {
    return services.map((service, index) => {
      let imgUrl = ''
      let imgAlt = ''

      if (
        typeof service.thumbnail === 'object' &&
        service.thumbnail !== null &&
        'url' in service.thumbnail
      ) {
        imgUrl = service.thumbnail.url as string
        imgAlt = service.thumbnail.alt as string
      }

      if (service.braidType === "touchUp") {
        return;
      }

      let braidType = service.title;

      if (service.braidType === "stitchHalf") {
        return
      }

      if (service.braidType === "stitchFull") {
        braidType = "Stitch Braids"
      }

      return (
        <ServiceCard
          key={index}
          imageAlt={imgAlt}
          imageUrl={imgUrl}
          title={braidType}
          description={service.description as string}
        />
      )
    })
  }, [services])
  return (
    <div className={styles['horizontal-slider']}>
      {renderCards()}
    </div>
  )
}

export default InfiniteMovingCards
