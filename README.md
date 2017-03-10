# ncu-weather-cli [![npm package](https://img.shields.io/npm/v/ncu.svg)](https://www.npmjs.com/package/ncu)
A simple CLI for NCU's Information

### Requirements
- Node.js 6.x

### Global Install
```bash
$ npm install ncu -g
$ ncu
```

### Local Install
```bash 
$ npm install ncu
```

```javascript
const ncu = require('ncu')
ncu.weather().then( data => console.log(ncu.convertWeather(data)) ).catch(err => console.log(err))
console.log(ncu.time())
console.log(ncu.bonus())
```

### Dependency References
- request https://github.com/request/request
- cheerio https://github.com/cheeriojs/cheerio

### License
MIT