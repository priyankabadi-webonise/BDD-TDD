import React from 'react';
import Enzyme,{ shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import AddToDo from './AddToDo';
import { exportAllDeclaration } from '@babel/types';



Enzyme.configure({adapter : new Adapter});
var warraper = shallow(<AddToDo update={true} />);
describe('AddToDo componenet',()=>{
  it('functionToCall shhould be this.callsaveData',()=>{
    expect(warraper.functionToCall).toEqual('this.callsaveData');
  })
})