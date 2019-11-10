import React from 'react';
import * as PropTypes from 'prop-types';
import '../styles/FavoritesContainer.css'
import FavCityHeader from './FavCityHeader';
import WeatherInfo from './WeatherInfo';
import Loader from './Loader';
import Error from './Error';

const FavoritesList = ({ cities, isLoading , errors, onRemove}) => (
    <div className='FavList'>
        {
            cities.map((city) => (
                <div key={city.id} className={'FavoriteCity'}>
                    <FavCityHeader onRemove={onRemove} city={city}/>
                    { (!errors.includes(city.id)) ? ((!isLoading.includes(city.id) ? <WeatherInfo weather={city}/> : <Loader/>)) : <Error/>}
                </div>
            ))
        }
    </div>
);

FavoritesList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.arrayOf(PropTypes.string),
    errors: PropTypes.arrayOf(PropTypes.string),
    onRemove: PropTypes.func
};

FavoritesList.defaultProps = {
    cities: [],
    isLoading: [],
    errors: [],
    onRemove: f => f
};


export default FavoritesList;