'use client'

import { ServicesBlock } from '@/payload-types'
import React from 'react'
import styles from './Services.module.scss'
import Button from '@/components/Button/Button'
import { redirect } from 'next/navigation'
import InfiniteMovingCards from '@/components/InfiniteMovingCards/InfiniteMovingCards'

const Services = (block: ServicesBlock) => {
  const { sectionHeading, heading, ctaLabel, ctaUrl } = block

  return (
    <section className={styles['services']}>
      <p className={styles['services__section-heading']}>{sectionHeading}</p>
      <h2 className={styles.services__heading}>{heading}</h2>
      <div className={styles['services__card-container']}>
        <InfiniteMovingCards />
        <InfiniteMovingCards />
      </div>
      <Button
        type="cta"
        className={styles.services__cta}
        onClick={() => redirect(ctaUrl as string)}
      >
        {ctaLabel}
      </Button>
    </section>
  )
}

export default Services
