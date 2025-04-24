'use client'

import React from 'react'
import { HeroBlock, Media } from '@/payload-types'
import styles from './Hero.module.scss'
import { FlipWords } from '@/components/ui/FlipWords/flip-words'
import Link from 'next/link'
import Button from '@/components/Button/Button'
import { redirect } from 'next/navigation'
import { motion } from 'motion/react'
import { slideIn } from '@/lib/payload/utils'

const fallbackWords = [
  'timeless power',
  'royal energy',
  'effortless reign',
  'signature style',
  'bold grace',
]

const Hero = (block: HeroBlock) => {
  const { heading, image, body, flipText, variant, cta } = block
  const words = flipText ? flipText.map((obj) => obj.subheading) : fallbackWords

  const first = image

  const isPopulatedMedia = (img: typeof first): img is Media => {
    return typeof img === 'object' && img !== null && 'url' in img
  }

  if (!isPopulatedMedia(first)) {
    return null // or render fallback UI
  }

  const ctaUrl = cta?.url ?? ''

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.hero__content}
        {...slideIn()}
      >
        <h1 className={styles.hero__heading}>{heading}</h1>
        {flipText && (
          <FlipWords words={words} duration={5000} className={styles['hero__flip-text']} />
        )}

        <p className={styles.hero__body}>{body}</p>

        {variant === 'primary' && (
          <Button onClick={() => redirect(ctaUrl)} type="cta" className={styles.hero__cta}>
            {cta?.label}
          </Button>
        )}
      </motion.div>

      <div className={styles.hero__overlay}></div>

      <img src={first.url as string} alt={first.alt} className={styles.hero__image} loading='lazy' fetchPriority='high' />
    </section>
  )
}

export default Hero
