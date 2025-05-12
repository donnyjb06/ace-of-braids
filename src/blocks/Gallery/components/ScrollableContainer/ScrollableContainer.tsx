'use client'

import React from 'react'
import _ from 'lodash'
import { Media } from '@/payload-types'
import styles from './ScrollableContainer.module.scss'
import { getGalleryImages } from '@/lib/payload/getGalleryImages'
import ImageRow from '../ImageRow/ImageRow'
import { useTransform, useScroll, useMotionValue } from 'motion/react'
import Lenis from 'lenis'
import { useDimension } from './useDimension'

const ScrollableContainer = () => {
  const [images, setImages] = React.useState<Media[][]>()
  const container = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['center end', 'end start'],
  })
  const { width } = useDimension();

  const x = useTransform(scrollYProgress, [0, 1], [0, width * 1.5])
  const x2 = useTransform(scrollYProgress, [0, 1], [width * 2, 0])
  const x3 = useTransform(scrollYProgress, [0, 1], [0, width * 2.5])

  React.useEffect(() => {
    const fetchImages = async () => {
      const response = await getGalleryImages()

      const chunkedImages = _.chunk(response.docs, 4)

      setImages(chunkedImages)
      console.log(chunkedImages)
    }

    fetchImages()
  }, [])

  React.useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className={styles['gallery-container']} ref={container}>
      <ImageRow images={images[0]} x={x} />
      <ImageRow images={images[1]} x={x2} />
      <ImageRow images={images[2]} x={x3} />
    </div>
  )
}

export default ScrollableContainer
