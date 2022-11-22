import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

const HEADING = 'The creative crew'
describe('Header component', () => {
  beforeEach(() => {
    render(<Header heading={HEADING} />)
  })

  it('should display the heading', () => {
    const heading = screen.getByRole(
      'heading', { level: 1, name: /the creative crew/i }
    )

    expect(heading).toBeInTheDocument()
  })

  it.todo('should display the subtitle')

  it.todo('should display the description')
})
