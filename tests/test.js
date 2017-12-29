const urlShortener = require('../index.js');

const id = 123456789;
let encoded = '';

urlShortener.encode(id, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
    encoded = res;
    console.log('test');
  }
});

console.log(encoded)
urlShortener.decode(1234, (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log(res);
  }
});
