function ucFirst(str) {
  let newStr;
  if (!str) {
    return str;
  } else if (str.length == 1) {
    return newStr = str[0].toUpperCase();
  }
  return str[0].toUpperCase() + str.slice(1);
}
