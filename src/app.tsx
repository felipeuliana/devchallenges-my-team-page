import React, { ReactElement } from 'react'
import ReactDOM from 'react-dom/client'
import Main from './templates/main/main'
import { CARDS } from './mocks/cards'
import { HEADER } from './mocks/header'
import './index.css'

export default function App (): ReactElement {
  return (
    <>
      <Main header={HEADER} cards={CARDS} />

      <footer>
        created by{' '}
        <a href='https://devchallenges.io/portfolio/felipeuliana'>
          felipeuliana
        </a>
        {' '}- devChallenges.io
      </footer>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
