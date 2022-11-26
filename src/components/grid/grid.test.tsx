import React from 'react'
import { render, screen, within } from '@testing-library/react'
import Grid from './grid'

const CARDS = [
  {
    image: {
      alt: 'Avatar of Terry Medhurst',
      src: 'https://robohash.org/hicveldicta.png'
    },
    name: 'Terry Medhurst',
    title: 'Product owner'
  },
  {
    image: {
      alt: 'Avatar of Sheldon Quigley',
      src: 'https://robohash.org/doloremquesintcorrupti.png'
    },
    name: 'Sheldon Quigley',
    title: 'Art director'
  },
  {
    image: {
      alt: 'Avatar of Terrill Hills',
      src: 'https://robohash.org/consequunturautconsequatur.png'
    },
    name: 'Terrill Hills',
    title: 'Tech Lead'
  },
  {
    image: {
      alt: 'Avatar of Miles Cummerata',
      src: 'https://robohash.org/facilisdignissimosdolore.png'
    },
    name: 'Miles Cummerata',
    title: 'UX Designer'
  },
  {
    image: {
      alt: 'Avatar of Mavis Schultz',
      src: 'https://robohash.org/adverovelit.png'
    },
    name: 'Mavis Schultz',
    title: 'Developer'
  },
  {
    image: {
      alt: 'Avatar of Alison Reichert',
      src: 'https://robohash.org/laboriosamfacilisrem.png'
    },
    name: 'Alison Reichert',
    title: 'Developer'
  }
]

describe('Grid component', () => {
  beforeEach(() => {
    render(<Grid cards={CARDS} />)
  })

  it('should display a card grid', () => {
    const grid = screen.getByRole('list')
    const cards = within(grid).getAllByRole('listitem')

    expect(grid).toBeInTheDocument()
    expect(cards).toHaveLength(6)
  })
})
