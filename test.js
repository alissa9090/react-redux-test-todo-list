import {assert, expect} from 'chai'
import { addTodoSync } from './src/actions/todoActions'

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('addTodoSync', function(){
  it('should return an action to create a new todo', function(){
    const text = "aaa"
    expect(addTodoSync(text)).to.deep.equal({
      type: 'ADD_TODO',
      text
    })
  })
})
