import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './card'

const IMAGE = {
  alt: 'Woman avatar image.',
  src: 'michael-dam-mEZ3PoFGs_k-unsplash.jpg'
}

describe('Team member card', () => {
  beforeEach(() => {
    render(<Card image={IMAGE} />)
  })

  it('should display the team member image', () => {
    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', IMAGE.alt)
  })

  it.todo('should display the team member title')

  it.todo('should display the team member name')
})
