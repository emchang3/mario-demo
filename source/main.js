import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './sagas/sagas'
import reducer from './reducers'

import { App } from './app'


const sagaMiddleware = createSagaMiddleware()
const initialState = {
  mario: {
    position: [100, 100],
    facing: 'right',
    moving: false,
    jumping: false
  },
  env: [],
  weapons: [],
  powerUps: [],
  view: [0, window.innerWidth]
}
export const store = createStore(reducer, initialState, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))
sagaMiddleware.run(rootSaga, store.getState)


function render() {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
