import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Main from './main'
import { HEADER } from '../../mocks/header'
import { CARDS } from '../../mocks/cards'

const CardMeta: ComponentMeta<typeof Main> = {
  args: {
    cards: CARDS,
    header: HEADER
  },
  component: Main,
  title: 'Templates/Main'
}

export const Default: ComponentStory<typeof Main> = (args) => (
  <Main {...args} />
)

export default CardMeta
