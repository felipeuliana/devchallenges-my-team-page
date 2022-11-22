import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

const DESCRIPTION = 'We are team of creatively diverse.\s\sdriven.\s\sinnovative individuals working in various loctions from the world.'
const HEADING = 'The creative crew'
const SUBTITLE = 'Who we are'

describe('Header component', () => {
  beforeEach(() => {
    render(
      <Header
        description={DESCRIPTION}
        heading={HEADING}
        subtitle={SUBTITLE}
      />)
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
    const description = screen.getByText(DESCRIPTION)

    expect(description).toBeInTheDocument()
  })
})
