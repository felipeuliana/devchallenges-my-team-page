import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from './header'

const HeaderMeta: ComponentMeta<typeof Header> = {
  args: {
    description: 'We are team of creatively diverse.  driven.  innovative individuals working in various loctions from the world.',
    heading: 'The creative crew',
    subtitle: 'Who we are'
  },
  component: Header,
  title: 'Header'
}

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)

export default HeaderMeta
