import React from 'react'
import styles from './ImageRow.module.scss'
import { Media } from '@/payload-types'
import { motion, MotionValue } from 'motion/react'
import Image from 'next/image'

interface ImageRowProps {
  images: Media[]
  x: MotionValue<number> | number;
}

const ImageRow: React.FC<ImageRowProps> = ({ images, x=0 }) => {
  return (
    <motion.div style={{x}} className={styles['image-row']}>
      {images.map((image) => {
        return (
          <div className={styles['image-row__image-wrapper']} key={image.url}>
            <Image src={image.url as string} alt={image.alt} fill />
          </div>
        )
      })}
      {images.map((image) => {
        return (
          <div className={styles['image-row__image-wrapper']} key={image.url}>
            <Image src={image.url as string} alt={image.alt} fill />
          </div>
        )
      })}
    </motion.div>
  )
}

export default ImageRow
