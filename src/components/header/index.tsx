import React from 'react'
import { FC } from 'react'

interface HeaderProps {
  description: string
  heading: string
  subtitle: string
}

const Header: FC<HeaderProps> = ({ description, heading, subtitle }) => (
  <header>
    <div>
      <h1>{heading}</h1>
    </div>

    <div>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </div>
  </header>
)

export default Header
