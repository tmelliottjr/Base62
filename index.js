module.exports = (function () {
  const base = 62;
  const alpha = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  function InvalidInputException(expected, actual) {
    this.expected = expected;
    this.actual = actual;
    this.toString = function () {
      return `Expected ${this.expected}, received ${this.actual}.`;
    };
  }

  InvalidInputException.prototype = Object.create(Error.prototype);
  InvalidInputException.prototype.name = 'InvalidInputException';

  function encode(id) {
    if (typeof id !== 'number' || Number.isNaN(id) || !Number.isInteger(id)) {
      let type = '';
      if (Number.isNaN(id)) {
        type = 'NaN';
      } else if (typeof id === 'number' && !Number.isInteger(id)) {
        type = `${typeof id} non-integer`;
      } else {
        type = typeof id;
      }

      throw new InvalidInputException('number', type);
    } else {
      let remainder = 0;
      let result = '';
      let num = id;

      while (num > 0) {
        remainder = Math.floor(num % base);
        num = Math.floor(num / base);
        result += alpha.charAt(remainder);
      }

      return result;
    }
  }

  function decode(str) {
    [...str].forEach((c) => {
      if (!alpha.includes(c)) {
        throw new InvalidInputException('string', 'Invalid Characters');
      }
    });

    if (typeof str !== 'string') {
      throw new InvalidInputException('string', typeof str);
    } else {
      let result = 0;

      for (let i = str.length; i >= 0; i -= 1) {
        result = (result * base) + alpha.indexOf(str.charAt(i));
      }

      return result;
    }
  }

  return {
    encode,
    decode,
  };
}());
