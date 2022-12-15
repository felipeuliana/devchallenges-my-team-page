import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from './header'
import { HEADER } from '../../mocks/header'

const HeaderMeta: ComponentMeta<typeof Header> = {
  args: {
    ...HEADER
  },
  component: Header,
  title: 'Components/Header'
}

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)

export default HeaderMeta
