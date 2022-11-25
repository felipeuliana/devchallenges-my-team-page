import React, { FC } from 'react'
import styles from './card.module.css'

interface CardProps {
  image: {
    alt: string
    src: string
  }
  name: string
  title: string
}

const Card: FC<CardProps> = ({ image, name, title }) => (
  <li className={styles.root}>
    <figure className={styles.figure}>
      <img alt={image.alt} src={image.src} />
      <figcaption className={styles.caption}>{title}</figcaption>
    </figure>

    <h2 className={styles.name}>{name}</h2>
  </li>
)

export default Card
