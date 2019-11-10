import React from 'react';
import '../styles/App.css';

export default class WeatherInfo extends React.Component {
    render() {
        const { weather = null } = this.props;
        return weather && (
            <div className="WeatherInfo">
                <div className="Info">
                    <h3>
                        Ветер
                    </h3>
                    <h4>
                        {this.props.weather.wind}
                    </h4>
                </div>
                <div className="Info">
                    <h3>
                        Облачность
                    </h3>
                    <h4>
                        {this.props.weather.cloudiness}
                    </h4>
                </div>
                <div className="Info">
                    <h3>
                        Давление
                    </h3>
                    <h4>
                        {this.props.weather.pressure}
                    </h4>
                </div>
                <div className="Info">
                    <h3>
                        Влажность
                    </h3>
                    <h4>
                        {this.props.weather.humidity}
                    </h4>
                </div>
                <div className="Info">
                    <h3>
                        Координаты
                    </h3>
                    <h4>
                        {this.props.weather.location}
                    </h4>
                </div>
            </div>
        );
    }
}