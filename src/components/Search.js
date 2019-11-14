import React from 'react';
import * as PropTypes from 'prop-types';
import '../styles/FavoritesContainer.css'

const Search = ({ onSubmit = f => f }) => (
    <div className='search'>
        <h1>
            Избранное
        </h1>
        <form onSubmit={onSubmit}>
            <input className='searchInput' placeholder='Добавить новый город' name='cityName' required='required'/>
            <button className='searchButton' type='submit'>&#43;</button>
        </form>
    </div>
);

Search.propTypes = {
    onSubmit: PropTypes.func
};

export default Search;
