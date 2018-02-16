function padding(str, width, fillChar) {
  const padBytes = width - str.length;
  let padding  = '';

  for(let i = 0; i < padBytes; ++i) {
    padding += fillChar;
  }

  return padding;
}

exports.ljust = function(str, width, fillChar=' ') {
  return str + padding(str, width, fillChar);
};

exports.rjust = function(str, width, fillChar=' ') {
  return padding(str, width, fillChar) + str;
};
