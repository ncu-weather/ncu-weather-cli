const weather = (temperature, precip) => {
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

module.exports = weather