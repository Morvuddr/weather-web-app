import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'
import MainContainer from './MainContainer'
import LocationService from '../services/LocationService';
import Header from '../components/Header';
import FavoritesContainer from './FavoritesContainer';

class App extends Component {
  state = {
    isLoading: true,
    weather: {},
  };
  constructor(props) {
    super(props);
    this.initWeather();
  }

  initWeather = () => {
    LocationService.handleUpdateLocation()
      .then(weather => this.setState({ weather, isLoading: false }))
  };

  handleUpdateWeather = () => {
    this.setState({
      isLoading: true
    });

    LocationService.handleUpdateLocation()
      .then(weather => this.setState({ weather, isLoading: false }))
  }

  render() {
    console.log(this.props.city);
    const { isLoading, weather } = this.state;
    return (
      <div className='App'>
        <Header onUpdate={this.handleUpdateWeather} />
        <MainContainer weather={weather} isLoading={isLoading} />
        <FavoritesContainer />
      </div>
    )
  }


}

const mapStateToProps = store => {
  console.log(store)
  return {
    city: store.city,
  }
}

export default connect(mapStateToProps)(App)

