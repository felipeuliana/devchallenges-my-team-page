import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Grid from './grid'
import Card, { CardProps } from '../card/card'
import { CARDS } from '../../mocks/cards'

const GridMeta: ComponentMeta<typeof Grid> = {
  component: Grid,
  title: 'Grid'
}

export const Default: ComponentStory<typeof Grid> = (args) => (
  <Grid>
    {CARDS.map((card: CardProps) => <Card key={card.name} {...card} />)}
  </Grid>
)

export default GridMeta
