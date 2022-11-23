import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Header from './header'

export default {
  args: {
    description: 'We are team of creatively diverse.  driven.  innovative individuals working in various loctions from the world.',
    heading: 'The creative crew',
    subtitle: 'Who we are',
  },
  component: Header,
  title: 'Header',
} as ComponentMeta<typeof Header>

export const Default: ComponentStory<typeof Header> = (args) => (
  <Header {...args} />
)
