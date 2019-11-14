import renderer from 'react-test-renderer';
import React from 'react';
import MainContainer from '../../containers/MainContainer';

describe('MainContainer component', () => {

    test('matches the snapshot when local weather is loaded', () => {
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

        const tree = renderer.create(
            <MainContainer weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot when local weather is loading', () => {
        const city = {
            isLoading: true,
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

        const tree = renderer.create(
            <MainContainer weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot on error', () => {
        const city = {
            isLoading: false,
            error: true,
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

        const tree = renderer.create(
            <MainContainer weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});