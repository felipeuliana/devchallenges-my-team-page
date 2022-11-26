import React, { FC } from 'react'
import Card, { CardProps } from '../card/card'

interface GridProps {
  cards: CardProps[]
}

const Grid: FC<GridProps> = ({ cards = [] }) => (
  <ul>
    {cards.map((card, key) => <Card key={key} {...card} />)}
  </ul>
)

export default Grid
