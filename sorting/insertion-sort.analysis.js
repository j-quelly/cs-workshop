const insertionSort = require('./insertion-sort.js');

// unit tests
// do not modify the below code
describe('insertion sort', () => {
  it('should sort correctly', (done) => {
    const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
    insertionSort(nums);
    expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    done();
  });
});
