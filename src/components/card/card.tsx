import React, { FC } from 'react'

interface CardProps {
  image: {
    alt: string
    src: string
  }
}

const Card: FC<CardProps> = ({ image }) => (
  <li>
    <img alt={image.alt} src={image.src} />
  </li>
)

export default Card
