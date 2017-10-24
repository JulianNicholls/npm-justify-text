const padding = (str, width, fillChar) => {
  const padBytes = width - str.length;
  let   padding  = '';

  for(let i = 0; i < padBytes; ++i) {
    padding += fillChar;
  }

  return padding;
}

exports.ljust = (str, width, fillChar=' ') => {
  return str + padding(str, width, fillChar);
};

exports.rjust = (str, width, fillChar=' ') => {
  return padding(str, width, fillChar) + str;
};

exports.formatCommas = (value) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
