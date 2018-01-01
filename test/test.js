const assert = require('assert');

let urlShortener;

describe('Module', () => {
  it('urlShortener should not be undefined', (done) => {
    urlShortener = require('../index.js');
    assert(urlShortener !== 'undefined');
    done();
  });
});

describe('Encode', () => {
  it('should encode correctly', (done) => {
    result = urlShortener.encode(123456789);
    assert.equal(result, 'Xk0M8');
    done();
  });

  it('should throw on non integer input', (done) => {
    let result = '';
    try {
      result = urlShortener.encode(123456789.10);
    } catch (e) {
      assert(e);
      done();
    }
  });
});

describe('Decode', () => {
  it('should decode correctly', (done) => {
    const result = urlShortener.decode('Xk0M8');
    assert.equal(result, 123456789);
    done();
  });

  it('should throw on non string input', (done) => {
    let result = '';
    try {
      result = urlShortener.decode({ value: 'Xk0M8' });
    } catch (e) {
      assert(e);
      done();
    }
  });

  it('should not accept invalid characters', (done) => {
    let result = '';
    try {
      result = urlShortener.decode({ value: 'Xk0M8-' });
    } catch (e) {
      assert(e);
      done();
    }
  });
});
