import React from 'react'
import styles from './PlayingCards.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

const PlayingCards = () => {
  return (
    <div className={styles['playing-cards']}>
      <div className={clsx(styles['playing-cards__card'], styles['playing-cards__card--1'])}>
        <Image src="./spade-icon.svg" width={50} height={50} alt="spade icon" className={styles['playing-cards__spade-icon']}/>
      </div>
    </div>
  )
}

export default PlayingCards
