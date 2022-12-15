import React from 'react'
import { render, screen, within } from '@testing-library/react'
import Main from './main'
import { CARDS } from '../../mocks/cards'
import { HEADER } from '../../mocks/header'

describe('Main template', () => {
  let template: ChildNode | null

  beforeEach(() => {
    const { container } = render(<Main header={HEADER} cards={CARDS} />)

    template = container.firstChild
  })

  it('should render correctly', () => {
    expect(template).toMatchSnapshot()
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
