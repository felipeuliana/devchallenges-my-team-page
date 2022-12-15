import React from 'react'
import { render, screen, within } from '@testing-library/react'
import Main from './main'
import { HEADER } from '../../mocks/header'
import { CARDS } from '../../mocks/cards'

describe('Main template', () => {
  beforeEach(() => {
    render(<Main header={HEADER} cards={CARDS} />)
  })

  it('should display the header', () => {
    const header = screen.getByTestId('main-header')

    expect(header).toBeInTheDocument()
  })

  it('should display the team members cards', () => {
    const cards = screen.getByTestId('main-cards')

    expect(cards).toBeInTheDocument()
    expect(within(cards).getAllByRole('listitem')).toHaveLength(6)
  })
})
