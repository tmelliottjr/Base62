module.exports = (function () {
  'use strict';
  const base = 62;
  const alpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  function encode(id, cb) {
    if (typeof id !== 'number' || Number.isNaN(id)) {
      cb(new Error(`Invalid Input. Expected 'number', received '${Number.isNaN(id) ? 'NaN' : typeof id}'`));
    } else {
      let remainder = 0;
      let result = '';
      let num = id;

      while (num > 0) {
        remainder = Math.floor(num % base);
        num = Math.floor(num / base);
        result += alpha.charAt(remainder);
      }

      cb(null, result);
    }
  }

  function decode(str, cb) {
    if (typeof str !== 'string') {
      cb(new Error(`Invalid Input. Expected 'string', received '${typeof str}'`));
    } else {
      let result = 0;

      for (let i = str.length; i >= 0; i -= 1) {
        result = (result * base) + alpha.indexOf(str.charAt(i));
      }

      cb(null, result);
    }
  }

  return {
    encode,
    decode,
  };
}());
