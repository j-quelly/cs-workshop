const mergeSort = require('./merge-sort.js');

// unit tests
// do not modify the below code
describe('merge sort', () => {
  it('should sort correctly', () => {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    const ans = mergeSort(nums);
    expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
