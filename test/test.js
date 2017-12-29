const assert = require('assert');

let urlShortener;

describe('Module', () => {
  it('urlShortener should not be undefined', (done) => {
    urlShortener = require('../index.js');
    assert(urlShortener !== 'undefined');
    done();
  })
});

describe('Encode/Decode', () => {
  it('should encode correctly', (done) => {
    urlShortener.encode(123456789, (err, res) => {
      assert.equal(res, 'Xk0M8');
      done();
    });
  });

  it('should decode correctly', (done) => {
    urlShortener.decode('Xk0M8', (err, res) => {
      assert.equal(res, 123456789);
      done();
    });
  });
});
