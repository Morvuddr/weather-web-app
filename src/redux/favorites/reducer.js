import { ADD_NEW_CITY, ADD_NEW_CITY_LOADING, DELETE_CITY, UPDATE_CITY } from './actionTypes';

const initialState = {
    cities: [],
    isLoading: []
};

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CITY: {
            const cities = [...state.cities, action.payload.city];
            return {
                ...state,
                cities,
            };
        }

        case UPDATE_CITY: {
            const { city } = action.payload;
            const cities = [...state.cities];
            cities[cities.findIndex(c => c.id === city.id)] = city;
            return {
                ...state,
                cities,
            };
        }

        case ADD_NEW_CITY_LOADING: {
            const { id, isLoading } = action.payload;
            const newIsLoading = [...state.isLoading];
            const isCityLoadingNow = newIsLoading.includes(id);

            if (isCityLoadingNow && !isLoading) {
                newIsLoading.splice(newIsLoading.indexOf(id), 1);
            } else if (isLoading && !isCityLoadingNow) {
                newIsLoading.push(id);
            }
            return {
                ...state,
                isLoading: newIsLoading
            };
        }

        case DELETE_CITY: {
            const cities = [...state.cities];
            cities.splice(action.payload.id, 1);
            return {
                ...state,
                cities,
            };
        }

        default: {
            return state;
        }
    }
}