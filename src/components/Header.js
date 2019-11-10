import React from 'react';
import * as PropTypes from 'prop-types';

const Header = ({ onUpdate = f => f }) => (
    <header className='App-header'>
        <h1 className='App-title'>Погода здесь</h1>
        <button className='Refresh-Location-Button' onClick={onUpdate}>Обновить геолокацию</button>
    </header>
);

Header.propTypes = {
    onUpdate: PropTypes.func
};

export default Header;