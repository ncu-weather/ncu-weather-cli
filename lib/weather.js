const weather = (temperature, precip) => {
    console.log(`Temperature: ${temperature} \u2103`)
    console.log(`     PRECIP: ${precip} mm/hr\n`)
    if (temperature < 20) {
        console.log('\u{1F455}  Remember to dress warmly')
    }
    if (precip > 0) {
        console.log("\u2602  Don't forget to take your umbrella")
    }
}

module.exports = weather