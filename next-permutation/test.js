const nextPermutation = require('./index');

test('input of [1,2,3] to return [1,3,2]', () => {
  expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
});

test('input of [3,2,1] to return [1,2,3]', () => {
  expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3]);
});

test('input of [1,1,5] to return [1,5,1]', () => {
  expect(nextPermutation([1, 1, 5])).toEqual([1, 5, 1]);
});

test('input of [1,5,1,5] to return [1,5,5,1]', () => {
  expect(nextPermutation([1, 5, 1, 5])).toEqual([1, 5, 5, 1]);
});

test('input of [4,3,2,1] to return [1,2,3,4]', () => {
  expect(nextPermutation([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
});

test('input of [4,2,1,4] to return [4,2,4,1]', () => {
  expect(nextPermutation([4, 2, 1, 4])).toEqual([4, 2, 4, 1]);
});

test('input of [7,6,8,4] to return [7,8,4,6]', () => {
  expect(nextPermutation([7, 6, 8, 4])).toEqual([7, 8, 4, 6]);
});

test('input of [2,1,3] to return [2,3,1]', () => {
  expect(nextPermutation([2, 1, 3])).toEqual([2, 3, 1]);
});

test('input of [3,1,2,4] to return [3,1,4,2]', () => {
  expect(nextPermutation([3, 1, 2, 4])).toEqual([3, 1, 4, 2]);
});

test('input of [4,1,4,2] to return [4,2,1,4]', () => {
  expect(nextPermutation([4, 1, 4, 2])).toEqual([4, 2, 1, 4]);
});

test('input of [1,1,1] to return [1,1,1]', () => {
  expect(nextPermutation([1,1,1])).toEqual([1,1,1]);
});