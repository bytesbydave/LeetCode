const summaryRanges = require('./index');

test('it returns [0->2,4->5,7] from  [0,1,2,4,5,7]', () => {
  expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(['0->2', '4->5', '7']);
});

test('it returns [0,2->4,6,8->9] from [0,2,3,4,6,8,9]', () => {
  expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
    '0',
    '2->4',
    '6',
    '8->9'
  ]);
});
