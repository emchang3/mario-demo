import React from 'react'

import Mario from './heroes/mario'
import Level from './environment/level'

export const App = () => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Level />
      <Mario />
    </div>
  )
}
