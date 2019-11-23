import FavoritesList from '../../components/FavoritesList';
import React from 'react';
import renderer from 'react-test-renderer';

let cities;
beforeEach(() => {
    cities = [
        {
            id: '1',
            name: 'Moscow',
            img: 'abcd',
            temperature: 'temp',
            wind: 'wind',
            cloudiness: 'cloudiness',
            pressure: 'pressure',
            humidity: 'humidity',
            location: '[location]'
        },
        {
            id: '2',
            name: 'Kemerovo',
            img: '1234',
            temperature: 'temp',
            wind: 'wind',
            cloudiness: 'cloudiness',
            pressure: 'pressure',
            humidity: 'humidity',
            location: '[location]'
        }
    ];
});
describe('FavoritesList component', () => {

    test('matches the snapshot when cities loaded', () => {

        const tree = renderer.create(
            <FavoritesList cities={cities} isLoading={[]} onRemove={f => f} errors={[]}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


    test('matches the snapshot when cities are loading', () => {

        const isLoading = ['1'];

        const tree = renderer.create(
            <FavoritesList cities={cities} isLoading={isLoading} onRemove={f => f} errors={[]}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('matches the snapshot when on error', () => {

        const errors = ['2'];

        const tree = renderer.create(
            <FavoritesList cities={cities} isLoading={[]} onRemove={f => f} errors={errors}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});