#!/usr/bin/env node
console.log('NCU Real Time Weather is Running......')

const request = require('request')
const cheerio = require('cheerio')
const bonus = require('./bonus')

// enums week day and print it
const weekday = new Array(7)
weekday[0] = 'Sunday'
weekday[1] = 'Monday'
weekday[2] = 'Tuesday'
weekday[3] = 'Wednesday'
weekday[4] = 'Thursday'
weekday[5] = 'Friday'
weekday[6] = 'Saturday'
let d = new Date()
let time = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()} ${weekday[d.getDay()]}`
console.log(time + ' UTC+8:00\n')

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

        // console.log(weatherHtml)
        // ref: http://stackoverflow.com/questions/17374893/how-to-extract-floating-numbers-from-strings-in-javascript
        let weather = weatherHtml.match(/[+-]?\d+(\.\d+)?/g);
        let temperature = weather[0]
        let precip = parseFloat(weather[1]) || 0 // precipitation
        console.log(`Temperature: ${temperature} \u2103`)
        console.log(`     PRECIP: ${precip} mm/hr\n`)
        if (temperature < 20) {
            console.log('\u{1F455}  Remember to dress warmly')
        }
        if (precip > 0) {
            console.log("\u2602  Don't forget to take your umbrella")
        }
        bonus()
    }
)