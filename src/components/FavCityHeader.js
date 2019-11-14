import React from 'react';
import '../styles/FavoritesContainer.css'
import * as PropTypes from 'prop-types';

const FavCityHeader = ({ onRemove, city }) => (
    <div className='favCityHeader'>
        <h1>{city.name}</h1>
        {!!city.img && <img src={city.img} alt='Иконка погоды' />}
        {!!city.temperature && <h1>{city.temperature}</h1>}
        <button className='deleteButton' onClick={() => onRemove(city.id)}>&#xd7;</button>
    </div>
);

FavCityHeader.propTypes = {
    onRemove: PropTypes.func,
    city: PropTypes.object
};

export default FavCityHeader;