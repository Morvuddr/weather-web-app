import React from 'react';
import * as PropTypes from 'prop-types';
import Search from '../components/Search';
import FavoritesList from '../components/FavoritesList';
import { connect } from 'react-redux';
import { addNewCityAsync, deleteCity } from '../redux/favorites/actions';

class FavoritesContainer extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCity({ name: e.target.cityName.value });
    };

    handleRemove = (id) => {
        this.props.removeCity(id);
    };

    render() {
        console.log('this.props.cities', this.props.cities);
        return (
            <>
                <Search onSubmit={this.handleSubmit} />
                <FavoritesList cities={this.props.cities} onRemove={this.handleRemove} isLoading={this.props.isLoading}/>
            </>
        );
    }
}

FavoritesContainer.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.arrayOf(PropTypes.string),
    addCity: PropTypes.func,
    removeCity: PropTypes.func,
};

FavoritesContainer.defaultProps = {
    cities: [],
    removeCity: f => f,
    addCity: f => f,
};

const mapStateToProps = ({ favorites: { cities, isLoading } }) => ({
    cities,
    isLoading,
});

const mapDispatchToProps = {
    addCity: addNewCityAsync,
    removeCity: deleteCity,
};


export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
