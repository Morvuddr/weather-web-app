import CurrentCityComponent from '../../components/CurrentCityComponent';
import renderer from 'react-test-renderer';
import React from 'react';

describe('CurrentCityComponent component', () => {
    test('matches the snapshot when the weather object is not null', () => {
        const weather = {
            name: 'Moscow',
            img: 'abcd',
            temperature: '1'
        };
        const tree = renderer.create(
            <CurrentCityComponent weather={weather}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
    test('matches the snapshot when the weather object is null', () => {
        const weather = null;
        const tree = renderer.create(
            <CurrentCityComponent weather={weather}/>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});