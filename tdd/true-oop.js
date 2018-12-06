// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


Array.prototype.oop_push = function() {};
Array.prototype.oop_pop = function() {};
Array.prototype.oop_slice = function() {};
Array.prototype.oop_map = function() {};
Array.prototype.oop_reduce = function() {};


describe('true object oriented data structures', () => {

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
    it('push one item and receive new length', function() {
      const arr = [];
      const new_length = arr.oop_push('a');
      assert.deepEqual(new_length, 1);
      assert.deepEqual(arr, ['a']);
    });
    it('push one items and receive new length', function() {
      const arr = [];
      const new_length = arr.oop_push('b', 'c');
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['b', 'c']);
    });
    it('pop one item into a variable', function() {
      const arr = ['a', 'b'];
      const popped_item = arr.oop_pop();
      assert.deepEqual(popped_item, 'b');
      assert.deepEqual(arr, ['a']);
    });
    it('pop two items into a variable', function() {
      const arr = ['a', 'b'];
      const popped_item = arr.oop_pop(2);
      assert.deepEqual(popped_item, ['a', 'b']);
      assert.deepEqual(arr, []);
    });
  });  
  
  
  describe('can slice', () => {
    it('all items with no args', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = arr.oop_slice();
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('all items with one arg', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = arr.oop_slice(0);
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('all items with two arg', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = arr.oop_slice(0, 4);
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('the first half', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = arr.oop_slice(0, 2);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['c', 'd']);
    });
    it('the second half', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = arr.oop_slice(2, 4);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['a', 'b']);
    });
    it('the middle', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_lengt = arr.oop_slice(1, 3);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['a', 'd']);
    });
  });  
  
  describe('can map', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function() {
      const arr = [0, 1, 2, 3];
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const success = arr.oop_map(cb);
      assert.deepEqual(success, true);
      assert.deepEqual(arr, [1, 0, 6, -24]);
    });
    it('with:  x => x', function() {
      const arr = [0, 1, 2, 3];
      const cb = x => x - 1;
      const success = arr.oop_map(cb);
      assert.deepEqual(success, true);
      assert.deepEqual(arr, [-1, 0, 1, 2]);
    });
  });  
  
  describe('can reduce', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function() {
      const arr = [0, 1, 2, 3];
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const old_length = arr.oop_reduce(cb);
      assert.deepEqual(old_length, 4);
      assert.deepEqual(arr, [46659]);
    });
    it('with:  x => x', function() {
      const arr = [0, 1, 2, 3];
      const cb = x => x;
      const old_length = arr.oop_map(cb);
      assert.deepEqual(old_length, 4);
      assert.deepEqual(arr, [6]);
    });
  });  
});
