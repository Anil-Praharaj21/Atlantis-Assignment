export function emailVerify(emailStr) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/.test(emailStr);
}

export function stringMatch(string1, string2) {
  return string1 === string2;
}
