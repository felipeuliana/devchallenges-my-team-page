import React, { FC } from 'react'
import Header, { HeaderProps } from '../../components/header/header'
import Card, { CardProps } from '../../components/card/card'
import Grid from '../../components/grid/grid'

interface MainProps {
  header: HeaderProps
  cards?: CardProps[]
}

const Main: FC<MainProps> = ({ cards = [], header }) => {
  const showCards = Boolean(cards.length)

  return (
    <main>
      <Header data-testid='main-header' {...header} />

      {showCards && (
        <Grid data-testid='main-cards'>
          {cards.map((card) => (
            <Card key={card?.name} {...card} />
          ))}
        </Grid>
      )}
    </main>
  )
}

export default Main
