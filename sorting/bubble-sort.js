/*
  Write a bubble sort here
  Name the function bubbleSort

  If you want to suspend running the unit tests, change describe to xdescribe

  Bubble sort works by comparing two adjacent numbers next to each other and
  then swapping their places if the smaller index's value is larger than the
  larger index's. Continue looping through until all values are in ascending
  order

  Provided is an optional visualization helper. Call snapshot(yourArray) at
  the beginning of each iteration of your inner loop with the state of the
  being-sorted array and the helper tool will show you how your array looks
  in the HTML section of CodePen. This is optional and only for your help.

*/


// bubble sort is not useful
// you'll never use this in production, but it's a useful learning tool
// for example:
// 5, 7, 6, 4 -- compare two numbers at a time and swap them if not in order
module.exports = function bubbleSort(nums) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1]) {
        swapped = true;
        const temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  } while (swapped);
};
// O(n^2)

