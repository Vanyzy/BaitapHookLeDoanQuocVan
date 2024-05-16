import React, { useContext, useState } from 'react'
import ldqvUseContext1 from './ldqvUseContext1';
export const ThemeContext = createContext(); 
export default function ldqvUseContext() {
    //state
    const [theme,setTheme] = useState('red');

  return (
    <ThemeContext.Provider value={theme}>
    <div>
      <h2>Demo useContext</h2>
      <ldqvUseContext1 />
    </div>
    </ThemeContext.Provider>
  )
}
