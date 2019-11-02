import { combineReducers } from 'redux';
import { cityReducer } from './city/city'
import { favoritesReducer } from './favorites/reducer'

export const rootReducer = combineReducers(
  {
    city: cityReducer,
    favorites: favoritesReducer,
  }
)