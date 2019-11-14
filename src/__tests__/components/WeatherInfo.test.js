import WeatherInfo from '../../components/WeatherInfo';
import renderer from 'react-test-renderer';
import React from 'react';

describe('WeatherInfo component', () => {

    test('matches the snapshot when weather != null', () => {
        const city = {
            id: '1',
            name: 'Moscow',
            img: 'abcd',
            temperature: 'temp',
            wind: 'wind',
            cloudiness: 'cloudiness',
            pressure: 'pressure',
            humidity: 'humidity',
            location: '[location]'
        };
        const tree = renderer.create(
           <WeatherInfo weather={city}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('matches the snapshot when weather == null', () => {

        const tree = renderer.create(
            <WeatherInfo weather={null}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});