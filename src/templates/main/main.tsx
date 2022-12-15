import React, { FC } from 'react'
import Header, { HeaderProps } from '../../components/header/header'

interface MainProps {
  header: HeaderProps
}

const Main: FC<MainProps> = ({ header }) => {
  return (
    <main>
      <Header data-testid='main-header' {...header} />
    </main>
  )
}

export default Main
