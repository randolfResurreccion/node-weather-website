const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3947e998de75777b331848f244a780ca&query=${latitude},${longtitude}&units=f`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to Connect to weather services');
        } else if (body.error) {
            callback('Unable to find location');
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. Current humidity is ${body.current.humidity}%.`);
        }
    })
}

module.exports = forecast;