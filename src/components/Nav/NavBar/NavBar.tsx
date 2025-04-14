import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.scss';
import NavMenu from '../NavMenu/NavMenu';
import NavLink from '../NavLink/NavLink';
import { links } from '../util';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NextLink href='/'>
        <Image
          src='/logo.svg'
          alt='Logo'
          width={40}
          height={40}
          className={styles.nav__logo}
        />
      </NextLink>

      <ul className={styles.nav__list}>
        {links.map((link) => (
          <NavLink key={link.label} href={link.href} label={link.label} />
        ))}
      </ul>

      <NavMenu />
    </nav>
  );
};

export default NavBar;
