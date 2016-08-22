
function* helloSaga() {
  console.log('--- saga init ---')
}

export default function* rootSaga(getState) {
  yield [
    helloSaga()
  ]
}
