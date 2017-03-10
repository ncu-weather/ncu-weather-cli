const request = require('request')
const cheerio = require('cheerio')

const ncu = () => {
    return new Promise((resolve, reject) => {
        request({
            url: 'http://www.ncu.edu.tw',
            method: 'GET'
        }, (err, response, body) => {
            if (err || !body) {
                return reject(new Error(`Whoops! May be http://www.ncu.edu.tw is dead, error message:\n\n${err}\n`))
            }

            // paring data
            let $ = cheerio.load(body)
            let weatherHtml = $('.text01').text()
            if (!weatherHtml) {
                return reject(new Error('Whoops! The program is outdate, cann\'t get things from http://www.ncu.edu.tw\n'))
            }

            // ref: http://stackoverflow.com/questions/17374893/how-to-extract-floating-numbers-from-strings-in-javascript
            let weatherArray = weatherHtml.match(/[+-]?\d+(\.\d+)?/g)
            let temperature = weatherArray[0]
            let precip = parseFloat(weatherArray[1]) || 0 // precipitation
            resolve({
                temperature,
                precip
            })
        })
    })
}

const convert = ({ temperature, precip }) => {
    let result = ''
    result += `Temperature: ${temperature} \u2103\n`
    result += `     PRECIP: ${precip} mm/hr\n\n`
    if (temperature < 20) {
        result += '\u{1F455}  Remember to dress warmly\n'
    }
    if (precip > 0) {
        result += "\u2602  Don't forget to take your umbrella\n"
    }
    return result
}

module.exports = {
    convert,
    ncu
}
