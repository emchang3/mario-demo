import React from 'react'
import { connect } from 'react-redux'

import { Ground } from './ground'


const level = ({ level }) => {
  const composedMap = []
  for (var i = 0; i < level.length; i++) {
    for (var j = 0; j < level[i].length; j++) {
      const type = level[i][j].type
      const position = [i * 50, j * 50]
      switch (type) {
        case 'ground':
          composedMap.push(<Ground position={position} key={`${i}-${j}`} />)
        default:
          break
      }
    }
  }

  return (
    <div>
      {composedMap}
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    level: state.env
  }
}

export default connect(mapStateToProps)(level)
