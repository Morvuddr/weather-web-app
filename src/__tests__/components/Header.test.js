import Header from '../../components/Header';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Header component', () => {
    test('matches the snapshot', () => {
        const tree = renderer.create(
            <Header />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});