import { CHARACTER_LIST, SEARCH_CHARACTER, SET_CHARACTER_LIST } from './type'
import { put, takeEvery } from 'redux-saga/effects'



function* getCharacter() {
  let data = yield fetch('https://rickandmortyapi.com/api/character')
  data = yield data.json()
  // console.log('getCharacter', data)
  yield put({ type: SET_CHARACTER_LIST, data: data.results })
}



export function* searchCharacter() {

  let result = yield fetch(`https://rickandmortyapi.com/api/character/?name=rick`)
  result = yield result.json()
  // console.log('searchCharacter', result)
  // console.log("teste", data.query)
  yield put({ type: SET_CHARACTER_LIST, data: result})
}



function* characterSaga() {
  yield takeEvery('CHARACTER_LIST', getCharacter)
  yield takeEvery('SEARCH_CHARACTER', searchCharacter)
}

export default characterSaga