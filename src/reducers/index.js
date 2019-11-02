import { combineReducers } from 'redux';
import { cityReducer } from './city/city'
import { favoritesReducer } from './favorites/favorites'

export const rootReducer = combineReducers(
  {
    city: cityReducer,
    favorites: favoritesReducer,
  }
)