import renderer from 'react-test-renderer';
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../../containers/App';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('App container', () => {

    test('matches the snapshot when local weather is loaded and favorites cities are loaded', () => {
        const mockGeolocation = {
            getCurrentPosition: jest.fn()
                .mockImplementation((success) => Promise.resolve(success({
                    coords: {
                        latitude: 10,
                        longitude: 10
                    }
                })))
        };
        navigator.geolocation = mockGeolocation;
        const city = {
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
        const cities = [{
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
                <App />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});