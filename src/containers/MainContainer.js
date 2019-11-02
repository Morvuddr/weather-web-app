import React from 'react';
import './MainContainer.css'
import { WeatherInfo } from '../components/WeatherInfo';
import { Loader } from '../components/Loader';
import CurrentCityComponent from '../components/CurrentCityComponent'

export default class MainContainer extends React.Component {

    render() {
        const { weather, isLoading } = this.props;
        if (isLoading) {
            return (
                <div className="Main">
                    <Loader />
                </div>
            );
        }



        return (
            <div className="Main">
                {isLoading
                    ? <Loader />
                    : (
                        <>
                            <CurrentCityComponent weather={weather} />
                            <WeatherInfo weather={weather} />
                        </>
                    )
                }
            </div>
        );
    }


}