import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './card'

const IMAGE = {
  alt: 'Woman avatar image.',
  src: 'michael-dam-mEZ3PoFGs_k-unsplash.jpg'
}
const TITLE = 'Art director'
const NAME = 'Saba Cabrera'

describe('Team member card', () => {
  beforeEach(() => {
    render(<Card image={IMAGE} name={NAME} title={TITLE} />)
  })

  it('should display the team member image', () => {
    const image = screen.getByRole('img')

    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', IMAGE.alt)
  })

  it('should display the team member title', () => {
    const title = screen.getByText(TITLE)

    expect(title).toBeInTheDocument()
  })

  it('should display the team member name', () => {
    const name = screen.getByText(NAME)

    expect(name).toBeInTheDocument()
  })
})
