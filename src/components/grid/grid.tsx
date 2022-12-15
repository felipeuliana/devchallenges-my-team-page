import React, { FC, ReactElement } from 'react'
import styles from './grid.module.css'

interface GridProps {
  children: ReactElement[]
}

const Grid: FC<GridProps> = ({ children = [], ...props }) => (
  <ul className={styles.root} {...props}>
    {children}
  </ul>
)

export default Grid
