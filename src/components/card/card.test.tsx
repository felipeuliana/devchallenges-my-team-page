import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './card'

const IMAGE = {
  alt: 'Woman avatar image.',
  src: 'michael-dam-mEZ3PoFGs_k-unsplash.jpg'
}
const TITLE = 'Art director'

describe('Team member card', () => {
  beforeEach(() => {
    render(<Card image={IMAGE} title={TITLE} />)
  })

  it('should display the team member image', () => {
    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', IMAGE.alt)
  })

  it('should display the team member title', () => {
    const title = screen.getByText(/art director/i)

    expect(title).toBeInTheDocument()
  })

  it.todo('should display the team member name')
})
