import React, { FC } from 'react'

interface CardProps {
  image: {
    alt: string
    src: string
  }
  name: string
  title: string
}

const Card: FC<CardProps> = ({ image, name, title }) => (
  <li>
    <figure>
      <img alt={image.alt} src={image.src} />
      <figcaption>{title}</figcaption>
    </figure>

    <div>
      <h2>{name}</h2>
    </div>
  </li>
)

export default Card
