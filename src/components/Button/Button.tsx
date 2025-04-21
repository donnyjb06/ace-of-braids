import React, { HtmlHTMLAttributes, useState } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  type: 'cta' | 'standard'
}

const Button = ({ 
  className, 
  type, 
  children, 
  onClick, 
  ...props 
}: ButtonProps) => {
  // State to track icon animation
  const [isIconClicked, setIsIconClicked] = useState(false);

  // Click handler
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { 
    setIsIconClicked(true); // Trigger animation

    // Reset state after animation duration (300ms)
    setTimeout(() => {
      setIsIconClicked(false);
    }, 150);

    // Call the onClick passed via props
    if (onClick) {
      onClick(event); 
    }
  };

  return (
    <button
      {...props} 
      className={clsx(styles.button, className)}
      onClick={handleClick} 
    >
      {children}
      {type === 'cta' && (
        <Image
          src="/arrow-icon.svg"
          alt="arrow icon"
          height={24}
          width={24}
          className={clsx(styles.button__icon, {
            [styles.iconClicked]: isIconClicked,
          })}
        />
      )}
    </button>
  )
}

export default Button
