import React from 'react';
import './FavCityHeader.css';

const FavCityHeader = ({ onRemove, id, city }) => (
    <div className='favCityHeader'>
        <h1>{city.name}</h1>
        {!!city.icon && <img src={city.icon} alt='Иконка погоды' />}
        {!!city.temperature && <h1>{city.temperature}</h1>}
        <button className='deleteButton' onClick={() => onRemove(id)}>&#xd7;</button>
    </div>
);

export default FavCityHeader;