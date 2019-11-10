import React from 'react';
import '../styles/MainContainer.css'
import WeatherInfo from '../components/WeatherInfo';
import Loader from '../components/Loader';
import CurrentCityComponent from '../components/CurrentCityComponent'
import Error from '../components/Error';

export default class MainContainer extends React.Component {
    render() {
        const { weather, isLoading, error } = this.props;
        return (
            <div className="Main">
                { !error ?
                    (isLoading
                    ? <Loader />
                    : (
                        <>
                            <CurrentCityComponent weather={weather} />
                            <WeatherInfo weather={weather} />
                        </>
                    ))
                    :
                    <Error />
                }
            </div>
        );
    }
}