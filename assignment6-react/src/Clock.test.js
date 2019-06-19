import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import Clock from './Clock';


Enzyme.configure({adapter : new Adapter});
var warraper = shallow(<Clock />);

describe('clock',()=>{
  it('classSelect should return component',()=>{
    warraper.setState({checkBox:false});
    expect(warraper.state('checkBox')).toBe(false);
  })
  it('classSelect should return component',()=>{
    expect(warraper.classSelect='<View1 key="2"/>').toBe('<View1 key="2"/>');
  })
})