import React from 'react';
import Image from 'next/image';
import styles from './UtilityBar.module.scss';
import Link from 'next/link';

const UtilityBar = () => {
  return (
    <div className={styles['utility-bar']}>
      <div className={styles['utility-bar__contact-group']}>
        <Image src='./email-icon.svg' alt='Email icon' width={16} height={16} />
        <p className={styles['utility-bar__email']}>
          aceofbraids.kate@gmail.com
        </p>
      </div>

      <p>
        Where Stunning Hair Meets Stunning Design.
      </p>

      <div className={styles["utility-bar__socials"]}>
        <p>Follow me: </p>
        <div className={styles["utility-bar__social-icons"]}>
          <Link href="#">
            <Image src="./facebook-icon.svg" alt='Facebook icon' width={20} height={20}/>
          </Link>
          <Link href="#">
            <Image src="./instagram-icon.svg" alt='Instagram icon' width={20} height={20}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
