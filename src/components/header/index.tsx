import React from 'react'
import { FC } from 'react'

interface HeaderProps {
  heading: string
  subtitle: string
}

const Header: FC<HeaderProps> = ({ heading, subtitle }) => (
  <header>
    <div>
      <h1>{heading}</h1>
    </div>

    <div>
      <h2>{subtitle}</h2>
    </div>
  </header>
)

export default Header
