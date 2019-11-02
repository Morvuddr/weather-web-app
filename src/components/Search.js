import React from 'react';
import './Search.css'

const Search = ({ onSubmit }) => (
    <div className='search'>
        <h1>
            Избранное
        </h1>
        <form onSubmit={onSubmit}>
            <input className='searchInput' placeholder='Добавить новый город' name='cityName'></input>
            <button className='searchButton' type='submit'>&#43;</button>
        </form>
    </div>
)

export default Search;
