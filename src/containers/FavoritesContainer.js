import React from 'react';
import * as PropTypes from 'prop-types';
import Search from '../components/Search';
import FavoritesList from '../components/FavoritesList';
import { connect } from 'react-redux';
import { addNewCityAsync, removeCity } from '../redux/favorites/actions';

class FavoritesContainer extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addCity({ name: e.target.cityName.value });
        e.target[0].value = '';
    };

    handleRemove = (id) => {
        this.props.removeCity(id);
    };

    render() {
        return (
            <>
                <Search onSubmit={this.handleSubmit} />
                <FavoritesList cities={this.props.cities} onRemove={this.handleRemove} isLoading={this.props.isLoading} errors={this.props.errors}/>
            </>
        );
    }
}

FavoritesContainer.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.arrayOf(PropTypes.string),
    errors: PropTypes.arrayOf(PropTypes.string),
    addCity: PropTypes.func,
    removeCity: PropTypes.func,
};

FavoritesContainer.defaultProps = {
    cities: [],
    isLoading: [],
    errors: [],
    removeCity: f => f,
    addCity: f => f,
};

const mapStateToProps = ({ favorites: { cities, isLoading, errors } }) => ({
    cities,
    isLoading,
    errors,
});

const mapDispatchToProps = {
    addCity: addNewCityAsync,
    removeCity: removeCity,
};


export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
