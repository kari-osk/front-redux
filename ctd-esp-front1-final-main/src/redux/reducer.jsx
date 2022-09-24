import { ADD_FAVORITE, CLEAR_FAVORITE, REMOVE_FAVORITE } from './type';


export const favoriteData = (data = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      console.log('add favorite', action)
      return [action, data, ...data]

    case REMOVE_FAVORITE:
      console.log('remove favorite', action)
      const remainingItems = data.filter((item) => item.id !== action.data)
      return [...remainingItems]

    case CLEAR_FAVORITE:
      console.log('clear favorite', action)
      data = []
      return [...data]

    default:
      return data
  }
}