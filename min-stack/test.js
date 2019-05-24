const MinStack = require('./index');

describe('minStack', () => {
  let minStack = new MinStack();

  test('new MinStack should return an empty array', () => {
    expect(minStack.stack).toEqual([]);
  });

  test('MinStack push should have element inside the stack', () => {
    minStack.push('a')
    expect(minStack.stack).toEqual(['a'])
  })

  
});
