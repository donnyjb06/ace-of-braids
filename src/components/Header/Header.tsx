'use client';

import styles from './Header.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastY.current && currentY > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }

      lastY.current = currentY;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? '-100%' : '0%', opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={styles.header}>
      {children}
    </motion.header>
  );
};

export default Header;
