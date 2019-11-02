const url = 'https://api.openweathermap.org/data/2.5/weather';
const APIkey = '8830d9a0c3a419f55f3e4488ea421320';

// Добрый день, Руслан. Я студент из группы М3403. У меня есть вопрос по второй лабе: нужно ли каждый раз при заходе на страницу запрашивать разрешение на использование геолокации? Ведь выбор пользователя сохраняется, пока он сам не захочет изменить разрешенные права.

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
        let destinationURL = `${url}?lat=${location.lat}&lon=${location.lon}&APPID=${APIkey}`;
        return await LocationService.request(destinationURL);
    }
    static async getWeatherByCityName(name) {
        let destinationURL = `${url}?q=${name}&APPID=${APIkey}`;
        return await LocationService.request(destinationURL);
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
        xmlHttp.open("GET", destinationURL, true);
        xmlHttp.send(null);
    })

    static parseWeatherData = (result) => {
        console.log(result);
        const { data } = result;
        return {
            cityName: data.name,
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