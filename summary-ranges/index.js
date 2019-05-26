// 228. Summary Ranges

// Given a sorted integer array without duplicates, return the summary of its ranges.

// Example 1:

// Input:  [0,1,2,4,5,7]
// Output: ["0->2","4->5","7"]
// Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range.
// Example 2:

// Input:  [0,2,3,4,6,8,9]
// Output: ["0","2->4","6","8->9"]
// Explanation: 2,3,4 form a continuous range; 8,9 form a continuous range.

// Start out with an array with the first element. Loop through the nums array beginning with the SECOND element. If the element is one plus the previous element and the element is one minus the next element, do nothing. If element is only one plus the previous element, close the number sentence. Else, put the number as is. 

var summaryRanges = function(nums) {
  if (nums.length < 1) {
    return nums
  }
  const arr = [nums[0]+'']
  for(let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i-1] + 1 && nums[i] === nums[i+1] - 1) {
    } else if (nums[i] === nums[i-1] + 1 && nums[i] !== nums[i+1]) {
      arr[arr.length - 1] = (arr[arr.length - 1]+ '->' + nums[i])
    } else {
      arr.push(nums[i]+'')
    }
  }
  return arr
};

module.exports = summaryRanges