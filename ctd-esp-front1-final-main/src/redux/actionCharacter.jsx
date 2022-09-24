import { CHARACTER_LIST, SEARCH_CHARACTER } from './type'

export const characterList = () => {
  return {
    type: CHARACTER_LIST
  }
}

export const characterSearch = () => {
  return {
    type: SEARCH_CHARACTER,
    // query
  }
}