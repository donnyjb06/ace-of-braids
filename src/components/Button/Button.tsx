import React, { HtmlHTMLAttributes } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import Image from 'next/image';

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type: 'cta' | 'standard';
}

const Button = ({ className, type, children, ...props }: ButtonProps) => {
  return (
    <button {...props} className={clsx(styles.button, className)}>
      {children}
      {type === 'cta' && (
        <Image src='/arrow-icon.svg' alt='arrow icon' height={24} width={24} />
      )}
    </button>
  );
};

export default Button;
