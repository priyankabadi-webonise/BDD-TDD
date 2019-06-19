import React from 'react';
import Enzyme,{ shallow } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import DisplayToDo from './DisplayToDo';



Enzyme.configure({adapter : new Adapter});
var warraper = shallow(<DisplayToDo arraylist={[{id:1,desc:'hello'},{id:2,desc:'hello'}]} />);
describe('DisplayToDo ...',()=>{
  it('tr tag should appear twice',()=>{
    expect(warraper.find('tr')).toHaveLength(2);
  })
  it('div should appear only one',()=>{
    expect(warraper.find('div')).toHaveLength(1);
  })
})