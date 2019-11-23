import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import MainContainer from './MainContainer';
import Header from '../components/Header';
import FavoritesContainer from './FavoritesContainer';
import { initCities } from '../redux/favorites/actions';
import { initWeather } from '../redux/city/actions';

class App extends Component {

    handleUpdateWeather = () => {
        this.props.initWeather();
    };

    componentDidMount() {
        this.props.initWeather();
        this.props.initCities();
    }

    render() {
        const { isLoading, weather, error } = this.props;
        return (
            <div className='App'>
                <Header onUpdate={this.handleUpdateWeather}/>
                <MainContainer weather={weather} isLoading={isLoading} error={error}/>
                <FavoritesContainer/>
            </div>
        );
    }
}

const mapStateToProps = ({ city: { isLoading, error, weather } }) => {
    return {
        isLoading,
        error,
        weather,
    };
};
const mapDispatchToProps = {
    initCities: initCities,
    initWeather: initWeather,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

