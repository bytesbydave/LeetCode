// 20. Valid Parentheses

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function(s) {
  let arr = []
  let charMap = {'(':')', '{':'}', '[':']'}
  for(let letter of s) {
      if (letter === '(' || letter === '[' || letter === '{') {
          arr.push(letter)
      } else if (charMap[arr[arr.length-1]] === letter) {
          arr.pop()
      } else {
          return false
      }
  }
  return arr.length === 0
};

module.exports = isValid;
