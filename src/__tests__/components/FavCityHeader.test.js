import FavCityHeader from '../../components/FavCityHeader';
import React from 'react';
import renderer from 'react-test-renderer';
describe('FavCityHeader component', () => {

    test('matches the snapshot when city.icon != null, city.temperature != null', () => {
        const city = {
            id: '1',
            name: 'Moscow',
            img: 'abcd',
            temperature: '1'
        };

        const tree = renderer.create(
            <FavCityHeader city={city} onRemove={f => f}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


    test('matches the snapshot when city.icon == null, city.temperature == null', () => {
        const city = {
            id: '1',
            name: 'Moscow',
            img: null,
            temperature: null
        };

        const tree = renderer.create(
            <FavCityHeader city={city} onRemove={f => f}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});