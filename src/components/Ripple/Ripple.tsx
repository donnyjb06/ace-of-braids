'use client';

import { motion, AnimatePresence } from 'motion/react';
import React from 'react';
import { Tap } from './utils';
import styles from './Ripple.module.scss';

const Ripple = () => {
  const [taps, setTaps] = React.useState<Tap[]>([]);

  React.useEffect(() => {
    const handleTap = (event: MouseEvent | TouchEvent) => {
      const target = event.target as HTMLElement;

      if (target.closest('data-modal') || target.closest('data-calender'))
        return;

      const x = 'touches' in event ? event.touches[0].clientX : event.clientX;
      const y = 'touches' in event ? event.touches[0].clientY : event.clientY;

      const newTap = {
        id: Date.now(),
        x,
        y,
      };

      setTaps((prevTaps) => [newTap, ...prevTaps]);

      setTimeout(() => {
        setTaps((prevTaps) => prevTaps.filter((tap) => tap.id !== newTap.id));
      }, 500);
    };

    window.addEventListener('click', handleTap);
    window.addEventListener('touchstart', handleTap);

    return () => {
      window.removeEventListener('click', handleTap);
      window.removeEventListener('touchstart', handleTap);
    };
  }, []);

  return (
    <AnimatePresence>
      {taps.map((tap) => {
        return (
          <motion.span
            key={tap.id}
            className={styles.ripple}
            initial={{ scale: 0, opacity: 0.6, x: '-50%', y: '-50%' }}
            animate={{ scale: 2, opacity: 0, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            style={{ left: tap.x, top: tap.y }}
          />
        );
      })}
    </AnimatePresence>
  );
};

export default Ripple;
