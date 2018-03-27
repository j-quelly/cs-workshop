/*
  Write a function that performs mergesort a.k.a divide and conquer
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  To read the approach, refer to the class materials at
  https://btholt.github.io/four-semesters-of-cs/

  As always, you can rename describe to be xdescribe to prevent the
  unit tests from running while you're working

  There is no visualization mechanism for this algorithm. Use your own
  preferred method of introspection like console.log().
*/

function stitch(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  // while (left.length) {
  //   results.push(left.shift());
  // }

  // while (right.length) {
  //   results.push(right.shift());
  // }

  // return results;

  // or
  return results.concat(left, right);

  // or
  // return [...results, ...left, ...right];
}

module.exports = function mergeSort(nums) {
  // base case
  if (nums.length < 2) {
    return nums;
  }

  const { length } = nums;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);

  return stitch(mergeSort(left), mergeSort(right));
};
// O(n log n)

module.exports([10, 5, 3, 8, 2, 6, 4, 7, 9, 1]);
