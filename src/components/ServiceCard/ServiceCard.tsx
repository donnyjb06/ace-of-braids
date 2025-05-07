import React from 'react'
import styles from "./ServiceCard.module.scss"
import Image from 'next/image';

interface ServiceCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
}

const ServiceCard = ({ imageUrl, imageAlt, title, description }: ServiceCardProps) => {
  return (
    <div className={styles['service-card']}>
      <div className={styles['service-card__image-wrapper']}>
        <Image src={imageUrl} alt={imageAlt} className={styles['service-card__image']} fill/>
        <h3 className={styles['service-card__title']}>{title.toLocaleUpperCase()}</h3>
        <div className={styles['service-card__gradient-overlay']}></div>
      </div>
      <p className={styles['service-card__description']}>{description}</p>
    </div>
  )
}

export default ServiceCard