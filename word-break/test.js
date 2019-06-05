const wordBreak = require('./index');

test('it should return true if input is leetcode', () => {
  expect(wordBreak('leetcode', ['leet', 'code'])).toEqual(true);
});

test('it should return true if input is applepenapple', () => {
  expect(wordBreak('applepenapple', ['apple', 'pen'])).toEqual(true);
});

test('it should return false if input is catsandog', () => {
  expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toEqual(
    false
  );
});

test('it should return false if input is cars', () => {
  expect(wordBreak('cars', ['car', 'ca', 'rs'])).toEqual(true);
});


test('it should return false if input is aaaaaaa', () => {
  expect(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])).toEqual(false);
});


