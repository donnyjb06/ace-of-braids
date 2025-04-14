"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import clsx from 'clsx';
import styles from "./NavLink.module.scss"

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLink = ({ label, href }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  const className = clsx(
    styles["nav__link"],
    isActive && styles[`nav__link_status_active`],
  )
  
  return (
    <li className={styles["nav__list-item"]}>
      <Link href={href} className={className}>{label}</Link>
    </li>
  )
}

export default NavLink