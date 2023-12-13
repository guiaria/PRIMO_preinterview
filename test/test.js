var assert = require('assert');
var app = require('../index.js');

describe('MergeArray Function', function () {
  describe('Correctness', function () {
    it('It should sort correctly', function () {

      let result = app.mergeAndSortArray([1, 2, 3, 5], [4, 6, 8, 10]).every((value, index, array) => index === 0 || value >= array[index - 1]);
      assert.equal(true, result);
    });
  });
});