import React, { useContext } from 'react'
import { ThemeContext } from './ldqvUseContext'

export default function ldqvUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h2>ldqvUseContext2</h2>
      <p>
        <b>2210900078</b>
        <b>Le Doan Quoc Van</b>
        <b>K22CNT4</b>
      </p>
    </div>
  )
}
