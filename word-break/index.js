// For loop on the dictionary to find if the substr of the string contains an item in the dictionary. If yes, run the function again with that string removed.
// Return false at the end


function wordBreak(str, wordDict) {
  const cache = {};

  const helper = s => {
    if (s === '') return true;
    if (cache[s] !== undefined) return cache[s];

    for (let i = 1; i <= s.length; i++) {
      const word = s.substr(0, i);
      
      if (wordDict.indexOf(word) > -1) {
        const newStr = s.substr(i);

        if (helper(newStr)) {
          cache[s] = true;
          return true;
        }
      }
    }

    cache[s] = false;
    return false;
  }

  return helper(str)
}


// function wordBreak(s, wordDict, start = 0, end = wordDict.length - 1) {
//   if (s === '') {
//     return true;
//   }
//   if (start <= end) {
//     if (
//       wordDict[start] === s.substr(0, wordDict[start].length) &&
//       wordBreak(s.substr(wordDict[start].length), wordDict, 0, end)
//     ) {
//       return true;
//     } else {
//       return wordBreak(s, wordDict, start + 1, end);
//     }
//   }
//   return false
// }

module.exports = wordBreak;


wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])