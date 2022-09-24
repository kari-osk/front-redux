import { combineReducers } from 'redux'
import { favoriteData } from './reducer'
import { characterData } from './characterReducer'

export default combineReducers({
  favoriteData,
  characterData
})