import { combineReducers } from 'redux';
import { cityReducer } from './city/reducer'
import { favoritesReducer } from './favorites/reducer'

export const rootReducer = combineReducers(
  {
    city: cityReducer,
    favorites: favoritesReducer,
  }
)