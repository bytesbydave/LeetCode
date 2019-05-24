// 387. First Unique Character in a String
// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

var firstUniqChar = function(s) {
  const charMap = {};
  for (let char of s) {
    if (charMap[char] === undefined) {
      charMap[char] = true;
    } else {
      charMap[char] = false;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (charMap[s[i]] === true) {
      return i;
    }
  }
  return -1;
};

module.exports = firstUniqChar;
