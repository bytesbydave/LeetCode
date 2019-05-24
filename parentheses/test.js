const isValid = require('./index');

test('string of () returns true', () => {
  expect(isValid('()')).toEqual(true);
});

test('string of (( returns false', () => {
  expect(isValid('((')).toEqual(false);
});

test('string of (() returns false', () => {
  expect(isValid('(()')).toEqual(false);
});

test('string of ()[]{} returns true', () => {
  expect(isValid('()[]{}')).toEqual(true);
});

test('string of ([)] returns false', () => {
  expect(isValid('([)]')).toEqual(false);
});

test('string of {[]} returns true', () => {
  expect(isValid('{[]}')).toEqual(true);
});

test('string of ] returns false', () => {
  expect(isValid(']')).toEqual(false);
});
