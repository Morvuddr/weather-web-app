import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import FavoritesContainer from '../../containers/FavoritesContainer';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let city;
let cities;
beforeEach(() => {
    city = {
        isLoading: false,
        error: false,
        weather: {
            name: 'Moscow',
            img: 'abcd',
            temperature: 'temp',
            wind: 'wind',
            cloudiness: 'cloudiness',
            pressure: 'pressure',
            humidity: 'humidity',
            location: '[location]'
        }
    };
    cities = [{
        id: '1',
        name: 'Moscow',
        img: 'abcd',
        temperature: 'temp',
        wind: 'wind',
        cloudiness: 'cloudiness',
        pressure: 'pressure',
        humidity: 'humidity',
        location: '[location]'
    }];
});

describe('FavoritesContainer container', () => {

    test('matches the snapshot when favorites cities are loaded', () => {
        const store = mockStore({
            city: city,
            favorites: {
                cities: cities,
                errors: [],
                isLoading: []
            }
        });
        const tree = renderer.create(
            <Provider store={store}>
                <FavoritesContainer />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot when favorites cities are loading', () => {

        const store = mockStore({
            city: city,
            favorites: {
                cities: cities,
                errors: [],
                isLoading: ['1']
            }
        });

        const tree = renderer.create(
            <Provider store={store}>
                <FavoritesContainer />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot on error', () => {

         const store = mockStore({
            city: city,
            favorites: {
                cities: cities,
                errors: ['1'],
                isLoading: []
            }
        });
        const tree = renderer.create(
            <Provider store={store}>
                <FavoritesContainer />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});