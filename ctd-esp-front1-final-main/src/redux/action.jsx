import { ADD_FAVORITE, CLEAR_FAVORITE, REMOVE_FAVORITE } from './type'

export const addFavorite = (data) => {
  console.log('add favorite', data)
  return {
    type: ADD_FAVORITE,
    data
  }
}

export const removeFavorite = (data) => {
  console.log('remove favorite', data)
  return {
    type: REMOVE_FAVORITE,
    data
  }
}

export const clearFavorite = () => {
  console.log('clear favorite')
  return {
    type: CLEAR_FAVORITE,
  }
}