#!/usr/bin/env node
console.log('NCU Real Time Weather is Running......')

const ncu = require('./index.js')

console.log(ncu.time())
ncu.weather().then(data => {
    console.log(ncu.convertWeather(data))
    console.log(ncu.bonus())
}).catch(err => {
    console.log(err)
})