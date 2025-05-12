'use client'
import React from 'react'
import styles from './Gallery.module.scss'
import ScrollableContainer from './components/ScrollableContainer/ScrollableContainer'
import { GalleryBlock } from '@/payload-types'
import Link from 'next/link'
import { motion } from 'motion/react'
import { slideIn } from '@/lib/utils'

const Gallery = (block: GalleryBlock) => {
  const { heading, sectionHeading, ctaUrl, ctaLabel } = block

  return (
    <section className={styles['gallery-section']}>
      <motion.p className={styles['gallery-section__section-heading']} {...slideIn()}>{sectionHeading} </motion.p>
      <motion.h2 className={styles['gallery-section__heading']}{...slideIn()}>{heading}</motion.h2>
      <ScrollableContainer />
      <button className={styles['gallery-section__cta']}>
        <Link href={ctaUrl as string}>{ctaLabel}</Link>
      </button>
    </section>
  )
}

export default Gallery
