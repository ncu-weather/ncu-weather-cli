#!/usr/bin/env node

const request = require('request')
const cheerio = require('cheerio')

const weekday = new Array(7)
weekday[0] = 'Sunday'
weekday[1] = 'Monday'
weekday[2] = 'Tuesday'
weekday[3] = 'Wednesday'
weekday[4] = 'Thursday'
weekday[5] = 'Friday'
weekday[6] = 'Saturday'

request({
    url: 'http://www.ncu.edu.tw',
    method: 'GET'
}, function(err, response, body) {
        if (err || !body) {
            console.log('Whoops! May be http://www.ncu.edu.tw is dead, error message: \n')
            console.log(err)
            return err
        }
        let $ = cheerio.load(body)
        let weather = $('.text01').text()
        if (!weather) {
            console.log('Whoops! The program is outdate, cann\'t get things from http://www.ncu.edu.tw')
            return
        }
        let d = new Date()
        let time = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()} ${d.getHours()}:${d.getMinutes()} ${weekday[d.getDay()]}`
        console.log('NCU Real Time Weather ' + time + ' UTC+8:00\n')
        console.log(weather)
        console.log('\nCrawl from http://www.ncu.edu.tw')
    }
)