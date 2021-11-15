import {String} from '../assets/values/String';

export function emailVerify(emailStr) {
  return String.emailRegex.test(emailStr);
}

export function stringMatch(string1, string2) {
  return string1 === string2;
}
