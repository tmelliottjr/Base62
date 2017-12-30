# URL Shortener
[![Build Status](https://travis-ci.org/tmelliottjr/url-shortener.svg?branch=master)](https://travis-ci.org/tmelliottjr/url-shortener)
  
  
A simple base62 encoder/decoder for URL shortening.

## Installation
Coming Soon™

## Usage
```javascript
const urlShortener = require('url-shortener');
 
urlShortener.encode(123456789, (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log(res); // Xk0M8
  }  
});
 
urlShortener.decode('Xk0M8', (err, res) => {
  if (err) { 
    throw err;
  } else {
    console.log(res); // 123456789
  }  
});
```
