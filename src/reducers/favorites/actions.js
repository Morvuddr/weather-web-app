import * as types from './actionTypes';
import { CITIES } from '../../helpers/const';

export function addNewCity(newCity) {
    const cities = localStorage.getItem(CITIES) || [];
    if (Array.isArray(cities)) {
        cities.push(newCity);
        localStorage.setItem(CITIES, cities);
    } else {
        localStorage.setItem(CITIES, [newCity]);
    }
    return ({ type: types.ADD_NEW_CITY, payload: { city: newCity } });
}

export function deleteCity(id) {
    const cities = localStorage.getItem(CITIES) || [];
    if (Array.isArray(cities)) {
        cities.splice(id, 1);
        localStorage.setItem(CITIES, cities);
    } else {
        localStorage.setItem(CITIES, []);
    }
    return ({ type: types.DELETE_CITY, payload: { id } });
}
