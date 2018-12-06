// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!


function sideffect_push() {}
function sideffect_pop() {}
function sideffect_slice() {}
function sideffect_map() {}
function sideffect_reduce() {}


describe('side effect functions', () => {

  describe('are all functions', () => {
    it('sideffect_push instancof Function', function() {
      assert.equal(true, sideffect_push instanceof Function);
    });
    it('sideffect_pop instancof Function', function() {
      assert.equal(true, sideffect_pop instanceof Function);
    });
    it('sideffect_slice instancof Function', function() {
      assert.equal(true, sideffect_slice instanceof Function);
    });
    it('sideffect_map instancof Function', function() {
      assert.equal(true, sideffect_map instanceof Function);
    });
    it('sideffect_reduce instancof Function', function() {
      assert.equal(true, sideffect_reduce instanceof Function);
    });
  }); 
  
  describe('can push & pop', () => {
    it('push one item and receive new length', function() {
      const arr = [];
      const new_length = sideffect_push(arr, 'a');
      assert.deepEqual(new_length, 1);
      assert.deepEqual(arr, ['a']);
    });
    it('push one items and receive new length', function() {
      const arr = [];
      const new_length = sideffect_push(arr, 'b', 'c');
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['b', 'c']);
    });
    it('pop one item into a variable', function() {
      const arr = ['a', 'b'];
      const popped_item = sideffect_pop(arr);
      assert.deepEqual(popped_item, 'b');
      assert.deepEqual(arr, ['a']);
    });
    it('pop two items into a variable', function() {
      const arr = ['a', 'b'];
      const popped_item = sideffect_pop(arr, 2);
      assert.deepEqual(popped_item, ['a', 'b']);
      assert.deepEqual(arr, []);
    });
  });  
  
  
  describe('can slice', () => {
    it('all items with no args', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = sideffect_slice(arr);
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('all items with one arg', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = sideffect_slice(arr, 0);
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('all items with two arg', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = sideffect_slice(arr, 0, 4);
      assert.deepEqual(new_length, 0);
      assert.deepEqual(arr, []);
    });
    it('the first half', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = sideffect_slice(arr, 0, 2);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['c', 'd']);
    });
    it('the second half', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_length = sideffect_slice(arr, 2, 4);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['a', 'b']);
    });
    it('the middle', function() {
      const arr = ['a', 'b', 'c', 'd'];
      const new_lengt = sideffect_slice(arr, 1, 3);
      assert.deepEqual(new_length, 2);
      assert.deepEqual(arr, ['a', 'd']);
    });
  });  
  
  describe('can map', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function() {
      const arr = [0, 1, 2, 3];
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const success = sideffect_map(arr, cb);
      assert.deepEqual(success, true);
      assert.deepEqual(arr, [1, 0, 6, -24]);
    });
    it('with:  x => x', function() {
      const arr = [0, 1, 2, 3];
      const cb = x => x - 1;
      const success = sideffect_map(arr, cb);
      assert.deepEqual(success, true);
      assert.deepEqual(arr, [-1, 0, 1, 2]);
    });
  });  
  
  describe('can reduce', () => {
    it('with:  (x, y) => { return Math.pow(-x, x) + y }', function() {
      const arr = [0, 1, 2, 3];
      const cb = (x, y) => { return Math.pow(-x, x) + y };
      const old_length = sideffect_reduce(arr, cb);
      assert.deepEqual(old_length, 4);
      assert.deepEqual(arr, [46659]);
    });
    it('with:  x => x', function() {
      const arr = [0, 1, 2, 3];
      const cb = x => x;
      const old_length = sideffect_map(arr, cb);
      assert.deepEqual(old_length, 4);
      assert.deepEqual(arr, [6]);
    });
  });  
});
