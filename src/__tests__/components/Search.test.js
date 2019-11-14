import Search from '../../components/Search';
import renderer from 'react-test-renderer';
import React from 'react';

describe('Search component', () => {
    test('matches the snapshot', () => {
        const tree = renderer.create(
            <Search />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});