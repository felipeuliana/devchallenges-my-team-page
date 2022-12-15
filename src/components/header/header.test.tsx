/* eslint-disable no-useless-escape */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from './header'
import { HEADER } from '../../mocks/header'

describe('Header component', () => {
  let component: HTMLElement

  beforeEach(() => {
    const { container } = render(
      <Header {...HEADER} />)

    component = container
  })

  it('should render correctly', () => {
    expect(component).toMatchSnapshot()
  })

  it('should display the heading', () => {
    const heading = screen.getByRole(
      'heading', { level: 1, name: /the creative crew/i }
    )

    expect(heading).toBeInTheDocument()
  })

  it('should display the subtitle', () => {
    const subtitle = screen.getByRole(
      'heading', { level: 2, name: /who we are/i }
    )

    expect(subtitle).toBeInTheDocument()
  })

  it('should display the description', () => {
    const description = screen.getByText(
      /we are team of creatively diverse\. driven\. innovative individuals working in various locations from the world\./i
    )

    expect(description).toBeInTheDocument()
  })
})
