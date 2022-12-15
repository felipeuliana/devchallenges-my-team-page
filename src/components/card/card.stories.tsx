import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card from './card'

const CardMeta: ComponentMeta<typeof Card> = {
  args: {
    image: {
      alt: 'Woman avatar image.',
      src: 'michael-dam-mEZ3PoFGs_k-unsplash.jpg'
    },
    name: 'Saba Cabrera',
    title: 'Art director'
  },
  component: Card,
  title: 'Components/Card'
}

export const Default: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
)

export default CardMeta
