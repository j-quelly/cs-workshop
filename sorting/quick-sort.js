/*

  Quicksort!

  Name your function quickSort.

  Quicksort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.

  As always, you can change describe to xdescribe to prevent the unit tests from running while you're coding.

  No visualization is provided so feel free to use your own debugging methods (like console.log).

*/

module.exports = function quickSort(nums) {
  // base case
  if (nums.length <= 1) {
    return nums;
  }

  // grab a pivot
  const pivot = nums.pop();

  // divide
  const smaller = [];
  const larger = [];
  while (nums.length) {
    if (nums[0] < pivot) {
      smaller.push(nums.shift());
    } else {
      larger.push(nums.shift());
    }
  }

  return [].concat(quickSort(smaller), pivot, quickSort(larger));
};

// console.log(module.exports([2, 1, 4, 3, 7, 6, 5, 9, 10, 8]));
console.log(-999 < -998);
