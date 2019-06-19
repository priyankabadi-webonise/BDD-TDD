import { addTodo,deleteTodo } from './todoAction';
import React from 'react';
const expectedaddTodo ={
  type: "ADD_TODO",
  payload: {id:1,desc:'hello'}
}
const expecteddeleteTodo ={
  type: "DELETE_TODO",
  payload: {id:1}
}

describe('actions should create expected object',()=>{
  it('AddToDo function should return same output',()=>{
    expect(addTodo({id:1,desc:'hello'})).toEqual(expectedaddTodo);
  })

  it('delete function should return same output',()=>{
    expect(deleteTodo({id:1})).toEqual(expecteddeleteTodo);
  })
})

