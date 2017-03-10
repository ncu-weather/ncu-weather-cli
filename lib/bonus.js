const fs = require('fs')
const path = require('path')

const bonus = () => {
    fs.readFile(path.resolve(__dirname, 'faces.txt'), (err, data) => {
        var faces = data.toString().split('\n')
        var face = faces[Math.floor(Math.random() * faces.length)]
        console.log(face)
    })
}

module.exports = bonus