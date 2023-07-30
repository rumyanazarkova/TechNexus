import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/favorites_reducer'
import {
  ADD_TO_FAVORITES,
  REMOVE_FAVORITE_ITEM,
  CLEAR_FAVORITES,
  COUNT_FAVORITES_TOTALS
} from '../actions'

const getLocalFavorites = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites) {
    return JSON.parse(localStorage.getItem('favorites'))
  } else {
    return []
  }
}

const initialState = {
  favorites: getLocalFavorites(),

}

const FavoritesContext = React.createContext()

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  //add to favs
  const addToFavorites = (id, amount, product) => {
    dispatch({ type: ADD_TO_FAVORITES, payload: { id, amount, product } })
  }

  //remove item
  const removeFavorites = (id) => {
    dispatch({ type: REMOVE_FAVORITE_ITEM, payload: id })
  }


  //clear cart
  const clearFavorites = () => {
    dispatch({ type: CLEAR_FAVORITES })
  }

  useEffect(() => {
    dispatch({ type: COUNT_FAVORITES_TOTALS })
    localStorage.setItem('favorites', JSON.stringify(state.favorites))
  }, [state.favorites])

  return (
    <FavoritesContext.Provider value={{ ...state, addToFavorites, removeFavorites, clearFavorites }}>{children}</FavoritesContext.Provider>
  )
}

export const useFavoritesContext = () => {
  return useContext(FavoritesContext)
}