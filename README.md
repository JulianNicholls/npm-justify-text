# justify-text

This is a simple module, which allows for left or right justifying text
in a given width. The padding character can be specified, and it defaults 
to a space.


## Installation

```
npm install -S justify-text
```

or

```
yarn add justify-text
```

## Functions

`ljust()` and `rjust()` take a string, a width to render it in,
and an optional padding character, which is a space by default.

``` js
ljust(string, width, padding=' ')
rjust(string, width, padding=' ')
```

### Usage

``` js
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

