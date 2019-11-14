import Error from '../../components/Error';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Error component', () => {
    test('matches the snapshot', () => {
        const tree = renderer.create(
            <Error />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});