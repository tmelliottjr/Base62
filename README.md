# URL Shortener
[![Build Status](https://travis-ci.org/tmelliottjr/url-shortener.svg?branch=master)](https://travis-ci.org/tmelliottjr/url-shortener)
  
  
A simple base62 encoder/decoder for URL shortening.

## Installation
Coming Soon™

## Usage
```javascript
const urlShortener = require('url-shortener');
 
let encoded;
 
// Base62 encodes integer input
encoded = urlShortener.encode(123456789); // Xk0M8
 
// Base62 decodes string input
decoded = urlShortener.decode('Xk0M8'); // 123456789
 
// Bad non integer input on encode
try {
  encoded = urlShortener.encode(123456789.10);
} catch (e) {
  if (e.name == 'InvalidInputException') {
    console.log(e.toString()); // Expected type 'number', received typed 'number non-integer' instead.
  } else {
    console.log('Unkown Error Occured');
  }
}
  
// Bad non string input on decode
try {
  decoded = urlShortener.decode(12345);
} catch (e) {
  if (e.name == 'InvalidInputException') {
    console.log(e.toString()); // Expected type 'string', received typed 'number' instead.
  } else {
    console.log('Unknown Error Occured');
  }
}
```
