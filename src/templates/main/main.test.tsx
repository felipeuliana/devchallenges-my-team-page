import React from 'react'
import { render, screen } from '@testing-library/react'
import Main from './main'
import { HEADER } from '../../mocks/header'

describe('Main template', () => {
  beforeEach(() => {
    render(<Main header={HEADER} />)
  })

  it('should display the header', () => {
    const header = screen.getByTestId('main-header')

    expect(header).toBeInTheDocument()
  })

  it.todo('should display the team members cards')
})
