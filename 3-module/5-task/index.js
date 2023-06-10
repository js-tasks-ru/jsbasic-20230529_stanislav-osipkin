function getMinMax(str) {
  let result = {};
  arr = str.split(' ').filter(item => isFinite(item));

  result['min'] = Math.min(...arr);
  result['max'] = Math.max(...arr);

  return result;

}

