/*
  Insertion sort!

  Be sure to call your function insertionSort.

  The idea here is that the beginning of your list is sorted and the
  everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where
  the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct
  position in the array.

  Like bubble sort, there's a visualization mechanism available to you. Just
  call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!

  And you put xdescribe instead of describe if you want to suspend running the
  unit tests.
*/

// 1. 10, 5, 3, 8, 2, 6, 4, 7, 9, 1
// 2. 5, 10, 3, 8, 2, 6, 4, 7, 9, 1
// 3. 5, 3, 10, 8, 2, 6, 4, 7, 9, 1
// 4. 5, 3, 8, 10, 2, 6, 4, 7, 9, 1
// 5. 5, 3, 8, 2, 10, 6, 4, 7, 9, 1
// ...
module.exports = function insertionSort(nums) {
  for (let i = 1; i < nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[j] > nums[i]) {
        // remove from index i
        const spliced = nums.splice(i, 1);
        // then insert at index j from spliced[0]
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
};
// O(n^2)
