import * as types from './actionTypes';
import { CITIES } from '../../helpers/const';
import WeatherLocalStorage from '../../helpers/WeatherLocalStorage';
import LocationService from '../../services/LocationService';
import generateId from '../../helpers/generateId';

export function addNewCityAsync(newCity) {
    return async (dispatch) => {
        console.log(123455);
        if (!newCity.id) {
            newCity.id = generateId();
        }

        dispatch(addNewCityLoading(newCity.id, true));
        try {
            dispatch(addNewCity(newCity));

            const city = await LocationService.getWeatherByCityName(newCity.name);
            city.id = newCity.id;

            dispatch(updateCity(city));
        } catch (e) {
            // TBD
        }
        new WeatherLocalStorage(CITIES).addArrayItem(newCity);
        dispatch(addNewCityLoading(newCity.id, false));

    };
}

export function addNewCity(city) {
    return ({ type: types.ADD_NEW_CITY, payload: { city } });
}

export function updateCity(city) {
    return ({ type: types.UPDATE_CITY, payload: { city } });
}

export function initCities() {
    return async (dispatch) => {
        const cities = new WeatherLocalStorage(CITIES).getItem() || [];
        cities.map(async city => {
            dispatch(addNewCityLoading(city.id, true));
            try {

                dispatch(addNewCity(city));
                const newCity = await LocationService.getWeatherByCityName(city.name);
                newCity.id = city.id;

                dispatch(updateCity(newCity));
            } catch (e) {
                // TBD
            }
            dispatch(addNewCityLoading(city.id, false));
        });
    };
}

export function deleteCity(id) {
    new WeatherLocalStorage(CITIES).removeArrayItem(id);
    return ({ type: types.DELETE_CITY, payload: { id } });
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