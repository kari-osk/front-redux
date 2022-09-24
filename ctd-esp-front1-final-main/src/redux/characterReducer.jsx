import { SET_CHARACTER_LIST } from './type';

export const characterData = (data = [], action) => {
  switch (action.type) {
    case SET_CHARACTER_LIST:
      console.log('character list', action)
      return [...action.data]
    default:
      return data
  }
}