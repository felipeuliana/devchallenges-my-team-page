import React from 'react'
import { FC } from 'react'
import styles from './header.module.css'

interface HeaderProps {
  description: string
  heading: string
  subtitle: string
}

const Header: FC<HeaderProps> = ({ description, heading, subtitle }) => (
  <header className={styles.root}>
    <div className={styles.inner}>
      <h1 className={styles.heading}>{heading}</h1>
    </div>

    <div className={styles.inner}>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  </header>
)

export default Header
