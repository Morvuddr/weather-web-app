import { ADD_NEW_CITY, DELETE_CITY } from "./actionTypes"
import { CITIES } from "../../helpers/const";

const initialState = {
    cities: localStorage.getItem(CITIES) || [],
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CITY: {
            const cities = [...state.cities, action.payload.city];
            return {
                ...state,
                cities,
            }
        }
        case DELETE_CITY: {
            const cities = [...state.cities];
            cities.splice(action.payload.id, 1);
            return {
                ...state,
                cities,
            }
        }
        default: {
            if (!Array.isArray(state.cities)) {
                state.cities = [];
                localStorage.setItem(CITIES, []);
            }
            return state
        }
    }
}