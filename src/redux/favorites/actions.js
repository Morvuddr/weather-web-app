import * as types from './actionTypes';
import { CITIES } from '../../helpers/const';
import WeatherLocalStorage from '../../helpers/WeatherLocalStorage';
import LocationService from '../../helpers/LocationService';
import generateId from '../../helpers/generateId';

export function initCities() {
    return async (dispatch) => {
        const cities = new WeatherLocalStorage(CITIES).getItem() || [];
        cities.map(async localCity => {
            dispatch(addNewCityLoading(localCity.id, true));
            dispatch(addNewCity(localCity));
            const { city, error } = await LocationService.getWeatherByCityName(localCity.name);
            city.id = localCity.id;

            if (error.status) {
                dispatch(loadingError(localCity.id));
            } else {
                dispatch(updateCity(city));
            }

            dispatch(addNewCityLoading(localCity.id, false));
        });
    };
}

export function addNewCityAsync(newCity) {
    return async (dispatch) => {
        if (!newCity.id) {
            newCity.id = generateId();
        }

        dispatch(addNewCityLoading(newCity.id, true));
        dispatch(addNewCity(newCity));
        const { city, error } = await LocationService.getWeatherByCityName(newCity.name);
        city.id = newCity.id;

        if (error.status) {
            if (error.code !== 404) {
                dispatch(loadingError(newCity.id));
            } else {
                alert('Невозможно найти погоду для города: ' + newCity.name);
                dispatch(removeCity(newCity.id));
            }
        } else {
            dispatch(updateCity(city));
            new WeatherLocalStorage(CITIES).addArrayItem(newCity);
            dispatch(addNewCityLoading(newCity.id, false));
        }
    };
}

export function addNewCity(city) {
    return ({ type: types.ADD_NEW_CITY, payload: { city } });
}

export function updateCity(city) {
    return ({ type: types.UPDATE_CITY, payload: { city } });
}

export function removeCity(id) {
    new WeatherLocalStorage(CITIES).removeArrayItem(id);
    return ({ type: types.REMOVE_CITY, payload: { id } });
}

export function addNewCityLoading(id, isLoading) {
    return {
        type: types.ADD_NEW_CITY_LOADING,
        payload: {
            id,
            isLoading
        }
    };
}

export function loadingError(id) {
    return {
        type: types.LOADING_ERROR,
        payload: { id }
    }
}