#!/usr/bin/env node
console.log('NCU Real Time Weather is Running......')

const request = require('request')
const cheerio = require('cheerio')
const time = require('./lib/time')
const weather = require('./lib/weather')
const bonus = require('./lib/bonus')
time()

request({
    url: 'http://www.ncu.edu.tw',
    method: 'GET'
}, function(err, response, body) {
        if (err || !body) {
            console.log('Whoops! May be http://www.ncu.edu.tw is dead, error message: \n')
            console.log(err + '\n')
            return err
        }

        // paring data
        let $ = cheerio.load(body)
        let weatherHtml = $('.text01').text()
        if (!weatherHtml) {
            console.log('Whoops! The program is outdate, cann\'t get things from http://www.ncu.edu.tw')
            return
        }

        // ref: http://stackoverflow.com/questions/17374893/how-to-extract-floating-numbers-from-strings-in-javascript
        let weatherArray = weatherHtml.match(/[+-]?\d+(\.\d+)?/g);
        let temperature = weatherArray[0]
        let precip = parseFloat(weatherArray[1]) || 0 // precipitation
        weather(temperature, precip)
        bonus()
    }
)