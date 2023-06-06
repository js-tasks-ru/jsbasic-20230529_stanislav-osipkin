function truncate(str, maxlength) {
  let newStr;

  if (str.length <= maxlength) {
    return str;
  } else {
    return newStr = str.slice(0, (maxlength - 1)) + "…";
  }
}
