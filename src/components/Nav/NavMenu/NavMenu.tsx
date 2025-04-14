'use client';

import React, { useEffect } from 'react';
import { links } from '../util';
import styles from './NavMenu.module.scss';
import NavMenuLink from './NavMenuLink/NavMenuLink';
import { CSSTransition } from 'react-transition-group';
import NavMenuButton from './NavMenuButton/NavMenuButton';

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <div className={styles.nav__container}>
      <NavMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <CSSTransition
        nodeRef={menuRef}
        in={menuOpen}
        timeout={300}
        classNames={{
          enter: styles['nav__menu_transition_enter'],
          enterActive: styles['nav__menu_transition_enter-active'],
          exit: styles['nav__menu_transition_exit'],
          exitActive: styles['nav__menu_transition_exit-active'],
        }}
        mountOnEnter
        unmountOnExit>
        <div className={styles.nav__menu} ref={menuRef}>
          <h2 className={styles['nav__menu-header']}>Menu</h2>
          <ul className={styles.nav__list}>
            {links.map((link) => (
              <NavMenuLink
                key={link.label}
                href={link.href}
                label={link.label}
              />
            ))}
          </ul>
        </div>
      </CSSTransition>
    </div>
  );
};

export default NavMenu;
