import React from 'react';
import './Search.css'

const Search = () => (
    <div className='search'>
        <h1>
            Избранное
        </h1>
        <form>
            <input className='searchInput' placeholder='Добавить новый город'></input>
            <input className='searchButton' type='submit'></input>
        </form>
    </div>
)

export default Search;
