const time = require('./lib/time')
const weather = require('./lib/weather')
const bonus = require('./lib/bonus')

module.exports = {
    time,
    weather: weather.ncu,
    convertWeather: weather.convert,
    bonus
}
