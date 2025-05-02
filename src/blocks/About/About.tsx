'use client'

import React, { useCallback } from 'react'
import styles from './About.module.scss'
import { motion } from 'motion/react'
import Image from 'next/image'
import { AboutBlock, Media } from '@/payload-types'
import { slideIn } from '@/lib/payload/utils'
import Button from '@/components/Button/Button'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { redirect } from 'next/navigation'

const About = (block: AboutBlock) => {
  const { heading, sectionHeading, image, textBlocks, cta, variant, body } = block
  const isPrimary = variant === 'primary'
  const matches = useMediaQuery('(width > 1000px)')

  const sectionImage = image

  const isPopulatedMedia = (img: typeof sectionImage): img is Media => {
    return typeof img === 'object' && img !== null && 'url' in img
  }

  if (!isPopulatedMedia(sectionImage)) {
    return null // or render fallback UI
  }

  const renderTextBlocks = useCallback(() => {
    return !isPrimary ? textBlocks?.map((text, index) => (
      <p key={index} className={styles.about__body}>
        {text.textBlock}
      </p>
    )) : <p className={styles.about__body}>{body}</p>
  }, [textBlocks, body, isPrimary])

  const ctaUrl = cta?.url ?? ''

  return (
    <section className={styles.about}>
      {!isPrimary && <Image src="./leaf-icon.svg" alt="leaf-icon" width={212} height={221} className={styles['about__leaf-icon']}/>}
      <div className={styles.about__content}>
        {matches && (
          <motion.div className={styles['about__image-wrapper']} {...slideIn()}>
            <Image
              src={sectionImage?.url as string}
              alt={sectionImage.alt}
              className={styles.about__image}
              width={280}
              height={280}
            />
          </motion.div>
        )}

        <motion.div {...slideIn(20)} className={styles.about__description}>
          <p className={styles['about__section-heading']}>{sectionHeading}</p>

          <h2 className={styles.about__heading}>{heading}</h2>

          {!matches && (
            <motion.div className={styles['about__image-wrapper']} {...slideIn(-20)}>
              <Image
                src={sectionImage?.url as string}
                alt={sectionImage.alt}
                className={styles.about__image}
                width={280}
                height={280}
              />
            </motion.div>
          )}

          {renderTextBlocks()}

          <Button type="cta" className={styles.about__cta} onClick={() => redirect(ctaUrl)}>
            {cta?.label}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default About
