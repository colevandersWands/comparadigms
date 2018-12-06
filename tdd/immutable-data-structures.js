// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


Array.prototype.immut_push = function() {};
Array.prototype.immut_pop = function() {};
Array.prototype.immut_slice = function() {};
Array.prototype.immut_map = function() {};
Array.prototype.immut_reduce = function() {};


describe('immutable data structure', () => {

  describe('is an object with length', () => {
    it('arr instanceof Object', function() {
      const arr = [];
      assert.equal(true, arr instanceof Object);
    });
    it('length initially === 0', function() {
      const arr = [];
      assert.equal(0, arr.length);
    });
  });  

  describe('can push & pop', () => {
    it('push one item without modifying original arr', function() {
      const arr = [];
      const pushed_into = arr.immut_push('a');
      assert.deepEqual(pushed_into, ['a']);
      assert.deepEqual(arr, []);
    });
    it('push two items without modifying original arr', function() {
      const arr = [];
      const pushed_into = arr.immut_push('b', 'c');
      assert.deepEqual(pushed_into, ['b', 'c']);
      assert.deepEqual(arr, []);
    });
    it('pop one item without modifying original arr', function() {
      const arr = ['a', 'b'];
      const popped_from = arr.immut_pop();
      assert.deepEqual(popped_from, ['a']);
      assert.deepEqual(arr, ['a', 'b']);
    });
    it('pop two items without modifying original arr', function() {
      const arr = ['a', 'b'];
      const popped_from = arr.immut_pop(2);
      assert.deepEqual(popped_from, []);
      assert.deepEqual(arr, ['a', 'b']);
    });
  });  
  
  
  describe('can slice', () => {
    it('all items with no args', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = arr.immut_slice();
      assert.deepEqual(sliced, ['a', 'b', 'c', 'd']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('all items with one arg', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = arr.immut_slice(0);
      assert.deepEqual(sliced, ['a', 'b', 'c', 'd']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('all items with two arg', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = arr.immut_slice(0, 4);
      assert.deepEqual(sliced, ['a', 'b', 'c', 'd']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('the first half', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = arr.immut_slice(0, 2);
      assert.deepEqual(sliced, ['a', 'b']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('the second half', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = arr.immut_slice(2, 4);
      assert.deepEqual(sliced, ['c', 'd']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
    it('the middle', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const sliced = arr.immut_slice(1, 3);
      assert.deepEqual(sliced, ['b', 'c']);
      assert.deepEqual(arr, ['a', 'b', 'c', 'd']);
    });
  });  
  
  describe('can map', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function() {
      const arr = [0, 1, 2, 3];
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const mapped = arr.immut_map(cb);
      assert.deepEqual(mapped, [1, 0, 6, -24]);
      assert.deepEqual(arr, [0, 1, 2, 3]);
    });
    it('with:  x => x', function() {
      const arr = [0, 1, 2, 3];
      const cb = x => x - 1;
      const mapped = arr.immut_map(cb);
      assert.deepEqual(mapped, [-1, 0, 1, 2]);
      assert.deepEqual(arr, [0, 1, 2, 3]);
    });
  });  
  
  describe('can reduce', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function() {
      const arr = [0, 1, 2, 3];
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const reduced = arr.immut_reduce(cb);
      assert.deepEqual(reduced, 46659);
      assert.deepEqual(arr, [0, 1, 2, 3]);
    });
    it('with:  x => x', function() {
      const arr = [0, 1, 2, 3];
      const cb = x => x;
      const reduced = arr.immut_map(cb);
      assert.deepEqual(reduced, 6);
      assert.deepEqual(arr, [0, 1, 2, 3]);
    });
  });  
});
