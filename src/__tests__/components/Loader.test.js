import Loader from '../../components/Loader';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Loader component', () => {
    test('matches the snapshot', () => {
        const tree = renderer.create(
            <Loader />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});