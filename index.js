function padding(str, width, fillChar) {
  var padBytes = width - str.length;
  var padding  = '';

  for(var i = 0; i < padBytes; ++i) {
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

exports.formatCommas = function(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
