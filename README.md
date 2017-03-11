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
- request [GitHub](https://github.com/request/request)
- cheerio [GitHub](https://github.com/cheeriojs/cheerio)
- eslint [GitHub](https://github.com/eslint/eslint) | [Site](http://eslint.org)
- mocha [GitHub](https://github.com/mochajs/mocha) | [Site](https://mochajs.org)
- should [GitHub](https://github.com/shouldjs/should.js) | [Site](http://shouldjs.github.io)

### License
MIT