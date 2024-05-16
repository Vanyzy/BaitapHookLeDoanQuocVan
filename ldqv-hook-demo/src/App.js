import React from 'react'
import ldqvUsestate from './components/ldqvuseState'
import ldqvuseState from './components/ldqvuseState'
import ldqvUseEffect from './components/ldqvUseEffect'
import ldqvUseContext from './components/ldqvUseContext'

export default function App() {
  return (
    <div className='container border mt-3'>
    <h1 className='text center'>Le Doan Quoc Van - Hook</h1>
    <hr/>
   <ldqvuseState />
   <hr/>
   <ldqvUseEffect />
   <hr/>
   <ldqvUseContext />
  </div>
  )
}
