'use client'

import React from 'react'
import styles from './ImageLoader.module.scss'
import Image from 'next/image'
import clsx from 'clsx'
import PlayingCards from '../PlayingCards/PlayingCards'

const ImageLoader = ({ children }: { children: React.ReactNode }) => {
  const [isImagesLoaded, setIsImagesLoaded] = React.useState<boolean>(false)

  React.useEffect(() => {
    const images = Array.from(document.images)
    if (images.length === 0) {
      setIsImagesLoaded(true)
      return
    }

    let loaded = 0
    const onLoad = () => {
      loaded++
      if (loaded === images.length) setIsImagesLoaded(true)
    }

    images.forEach((img) => {
      if (img.complete) {
        onLoad()
      } else {
        img.addEventListener('load', onLoad)
        img.addEventListener('error', onLoad)
      }
    })

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', onLoad)
        img.removeEventListener('error', onLoad)
      })
    }
  }, [isImagesLoaded])

  return !isImagesLoaded ? (
    <div className={styles['image-loader']}>
      <PlayingCards />
    </div>
  ) : (
    <>{children}</>
  )
}

export default ImageLoader
