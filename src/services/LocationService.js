const url = 'https://api.openweathermap.org/data/2.5/weather';
const APIkey = 'b50d06cf0be2ceacf57cf97451e6a7af';

export default class LocationService {
    static handleUpdateLocation = async () => {
        const location = await LocationService.getLocation();
        const result = await LocationService.getWeatherByLocation(location);
        return LocationService.parseWeatherData(result);
    };

    static getLocation = async () => {
        let position = null;
        try {
            position = await new Promise((resolve, reject) => navigator.geolocation.getCurrentPosition(
                resolve,
                reject,
                { enableHighAccuracy: true }
            ));
        } catch (e) {
            console.error(`Get location error ${e}`);
        }
        return {
            lat: position ? position.coords.latitude.toFixed(2) : '30.32',
            lon: position ? position.coords.longitude.toFixed(2) : '59.9',
        };
    };

    static async getWeatherByLocation(location) {
        let destinationURL = `?lat=${location.lat}&lon=${location.lon}&APPID=${APIkey}`;
        return await LocationService.request(destinationURL);
    }
    static async getWeatherByCityName(name) {
        let destinationURL = `?q=${name}&APPID=${APIkey}`;
        return LocationService.parseWeatherData(await LocationService.request(destinationURL));
    }

    static request = (destinationURL) => new Promise((resolve, reject) => {

        console.log(destinationURL);
        let xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                let data = JSON.parse(xmlHttp.responseText)
                return resolve({ data: data, error: '' });
            } else if (xmlHttp.readyState === 4 && xmlHttp.status !== 200) {
                console.log(xmlHttp.responseText);
                let data = JSON.parse(xmlHttp.responseText);
                let errorString = 'Congratulations, you broke the site! :) \n (Most likely, the problem is this: ' + data.message + ' )';
                return resolve({ data: '', error: errorString });
            }
        }
        xmlHttp.open("GET", `${url}${destinationURL}`, true);
        xmlHttp.send(null);
    })

    static parseWeatherData = (result) => {
        console.log(result);
        const { data } = result;
        return {
            name: data.name,
            img: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
            temperature: (data.main.temp - 273.15).toFixed(0) + '°C',
            wind: data.wind.speed + ' m/s',
            cloudiness: data.weather[0].description,
            pressure: data.main.pressure + ' hpa',
            humidity: data.main.humidity + ' %',
            location: '[' + data.coord.lat + ',' + data.coord.lon + ']',
        };
    }
}