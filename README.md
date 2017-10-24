# justify-text

This is a test module, as part of a tutorial.
While it is fully tested, using it in production may not be the best idea.

To justify text in production, try [justify](https://www.npmjs.com/package/justify).

## Installation

```
npm install -S justify-text
```

or

```
yarn add justify-text
```

## Usage

### ljust() and rjust()

```ljust()``` and ```rjust()``` take a string, a width to render it in,
and an optional padding character.

``` js
ljust(string, width, padding=' ')
rjust(string, width, padding=' ')

const { ljust, rjust } = require('justify-text');

ljust('text', 7);
// => "text   "

ljust('text', 6, '0');
// => "text00"

rjust('text', 8);
// => "    text"

rjust('text', 9, '.');
// => ".....text"
```

## License

MIT
