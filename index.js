#!/usr/bin/env node
console.log('NCU Real Time Weather is Running......')

const time = require('./lib/time')
const weather = require('./lib/weather')
const bonus = require('./lib/bonus')

console.log(time())
weather.ncu().then(data => {
    console.log(weather.resolve(data))
    console.log(bonus())
}).catch(err => {
    console.log(err)
})
