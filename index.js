require('babel-register')({
  extensions: ['.es6', '.es', '.jsx', '.js']
})
require('babel-polyfill')
require('./src/server')