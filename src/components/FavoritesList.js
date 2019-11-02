import React from 'react';
import * as PropTypes from 'prop-types';
import './Favorites.css';
import FavCityHeader from './FavCityHeader';
import WeatherInfo from './WeatherInfo';
import { Loader } from './Loader';

const FavoritesList = ({ cities, onRemove, isLoading }) => (
    <div className='favList'>
        {
            cities.map((city) => (
                <div key={city.id}>
                    <FavCityHeader onRemove={onRemove} city={city}/>
                    {!isLoading.includes(city.id) ? <WeatherInfo weather={city}/> : <Loader/>}
                </div>
            ))
        }
    </div>
);

FavoritesList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.arrayOf(PropTypes.string),
    onRemove: PropTypes.func
};

FavoritesList.defaultProps = {
    cities: [],
    isLoading: [],
    onRemove: f => f
};


export default FavoritesList;