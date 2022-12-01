import React from 'react'
import { render, screen, within } from '@testing-library/react'
import Grid from './grid'
import Card from '../card/card'
import { CARDS } from '../../mocks/cards'

describe('Grid component', () => {
  beforeEach(() => {
    render(
      <Grid>
        {CARDS.map((card) => <Card key={card.name} {...card} />)}
      </Grid>
    )
  })

  it('should display a card grid', () => {
    const grid = screen.getByRole('list')
    const cards = within(grid).getAllByRole('listitem')

    expect(grid).toBeInTheDocument()
    expect(cards).toHaveLength(6)
  })
})
