var { ljust, rjust, formatCommas } = require('./index');

console.log('Starting Tests...');

var ljust1 = ljust('one', 5);
if (ljust1 !== 'one  ') {
  throw new Error('ljust space padding failed');
}

var ljust4 = ljust('one', 7, 'x');
if (ljust4 !== 'onexxxx') {
  throw new Error('ljust character padding failed');
}

var ljust2 = ljust('one', 3);
if (ljust2 !== 'one') {
  throw new Error('ljust no padding failed');
}

var ljust3 = ljust('longer', 5);
if (ljust3 !== 'longer') {
  throw new Error('ljust lack of space failed');
}

var rjust1 = rjust('two', 6);
if (rjust1 !== '   two') {
  throw new Error('rjust padding failed');
}

var rjust4 = rjust('two', 8, 'y');
if (rjust4 !== 'yyyyytwo') {
  throw new Error('rjust character padding failed');
}

var rjust2 = rjust('two', 3);
if (rjust2 !== 'two') {
  throw new Error('rjust no padding failed');
}

var rjust3 = rjust('more', 3);
if (rjust3 !== 'more') {
  throw new Error('rjust not enough space failed');
}

var fcTest = (value, expected) => {
  var actual = formatCommas(value);

  if (actual !== expected) {
    console.log({expected, actual});
    throw new Error('formatCommas failed.');
  }
};

fcTest(1, '1');
fcTest(12, '12');
fcTest(123, '123');
fcTest(1234, '1,234');
fcTest(12345, '12,345');
fcTest(123456, '123,456');
fcTest(1234567, '1,234,567');
fcTest(12345678, '12,345,678');
fcTest(123456789, '123,456,789');
fcTest(1234567890, '1,234,567,890');

fcTest(1.54, '1.54');
fcTest(1234.54, '1,234.54');
fcTest(1234567.547, '1,234,567.547');

console.log('Tests complete.')
