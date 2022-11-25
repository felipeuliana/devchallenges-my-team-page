import React, { FC } from 'react'

interface CardProps {
  image: {
    alt: string
    src: string
  }
  title: string
}

const Card: FC<CardProps> = ({ image, title }) => (
  <li>
    <figure>
      <img alt={image.alt} src={image.src} />
      <figcaption>{title}</figcaption>
    </figure>
  </li>
)

export default Card
