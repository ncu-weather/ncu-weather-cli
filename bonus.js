const fs = require('fs')
const path = require('path')

const bonus = function () {
    fs.readFile(path.resolve(__dirname, 'faces.txt'), function (err, data) {
        var faces = data.toString().split('\n')
        var face = faces[Math.floor(Math.random() * faces.length)]
        console.log(face)
    })
}

module.exports = bonus