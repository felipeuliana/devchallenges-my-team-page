import React, { FC, ReactElement } from 'react'
import styles from './grid.module.css'

interface GridProps {
  children: ReactElement[]
}

const Grid: FC<GridProps> = ({ children = [] }) => (
  <ul className={styles.root}>
    {children}
  </ul>
)

export default Grid
