const firstUniqChar = require('./index');

test('leetcode returns 0', () => {
  expect(firstUniqChar('leetcode')).toEqual(0);
});

test('llddfff to return -1', () => {
  expect(firstUniqChar('llddfff')).toEqual(-1);
});
