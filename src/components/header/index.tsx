import React from 'react'
import { FC } from 'react'

interface HeaderProps {
  heading: string
}

const Header: FC<HeaderProps> = ({ heading }) => (
  <header>
    <h1>{heading}</h1>
  </header>
)

export default Header
