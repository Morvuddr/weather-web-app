import renderer from 'react-test-renderer';
import React from 'react';
import MainContainer from '../../containers/MainContainer';

let city;
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
});

describe('MainContainer component', () => {

    test('matches the snapshot when local weather is loaded', () => {

        const tree = renderer.create(
            <MainContainer weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot when local weather is loading', () => {
        city.isLoading = true;

        const tree = renderer.create(
            <MainContainer weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('matches the snapshot on error', () => {
        city.error = true;
        const tree = renderer.create(
            <MainContainer weather={city.weather} isLoading={city.isLoading} error={city.error} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});