var nextPermutation = function(nums) {
  let tempNum = valley(nums);

  if (tempNum < 0) {
    return sort(nums);
  } else {
    let secondSmallest = getSmallest(nums, tempNum + 1, nums[tempNum])
    swap(nums, tempNum, secondSmallest);
    return sort(nums, tempNum + 1, nums.length);
  }

  function getSmallest(arr, start, min) {
    let smallest = start;
    for (let i = start; i < arr.length; i++) {
      if (nums[i] < nums[smallest] && nums[i] > min) {
        smallest = i;
      }
    }
    return smallest
  }

  function valley(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] < arr[i + 1]) {
        return i;
      }
    }
    return -1;
  }

  function swap(arr, first, last) {
    let temp = arr[first];
    arr[first] = arr[last];
    arr[last] = temp;
  }

  function sort(arr, first = 0, len = arr.length) {
    for (let i = len - 1; i >= first; i--) {
      for (let j = first + 1; j <= i; j++) {
        if (arr[j - 1] > arr[j]) {
          swap(arr, j - 1, j);
        }
      }
    }
    return arr;
  }
};

console.log(nextPermutation([5, 4, 7, 5, 3, 2]));
// [5,5,2,3,4,7]

module.exports = nextPermutation;
