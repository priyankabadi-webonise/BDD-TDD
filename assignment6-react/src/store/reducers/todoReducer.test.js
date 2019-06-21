import {todoReducer} from './todoReducer';

describe('reducers..',()=>{
   var  action1={
      type: "ADD_TODO",
      payload: {id:1,desc:'hello'}
    };
    var  action2={
      type: "LOADED_TODO",
      payload: [{id:1,desc:'hello'}]
    };
  it('ADD_TODO should add new todo in store',()=>{
    expect(todoReducer([],action1)).toEqual([{id:1,desc:'hello'}])
  })

  it('LOADED_TODO should return with same data',()=>{
    expect(todoReducer([],action2)).toEqual([{id:1,desc:'hello'}])
  })
})