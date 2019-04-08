import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import {mount,shallow} from 'enzyme';
import  SearchBarComponent from '../../src/components/search-bar'
import HeaderComponent from '../../src/components/employee_header';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('SearchBarComponent',()=>{
  it('Idea is to test whether components are receiving props and are rendered properly', ()=>{
    const wrapper = mount(<SearchBarComponent />);
    expect(SearchBarComponent.prototype).to.not.be.null;
  });
  it('setting the state',()=>{
    const searchbar = shallow(<SearchBarComponent />);
    const name = "Samantha";
    searchbar.setState({term:'Samantha'});
    expect(searchbar.find('input').html().indexOf(name) > -1).equal(true);
  });
})
describe('SearchBarComponent',()=>{
  it('Searchbar rendering', ()=>{
    const wrapper = mount(<SearchBarComponent />);
    expect(shallow(<SearchBarComponent />).length).equal(1);
  });
})


describe('HeaderComponent',()=>{
  it('should create object', ()=>{
    const props = {companyInfo : {companyName:'Infosys',companyMotto : 'Success', companyEst : '2018-01-17T16:55:10.580Z'}};
    const wrapper = mount(<HeaderComponent {...props} />);
    expect(HeaderComponent.prototype).to.not.be.null;
  });
})

describe('HeaderComponent',()=>{
  it('render without any errors', ()=>{
    const props = {companyInfo : {companyName:'Infosys',companyMotto : 'Success', companyEst : '2018-01-17T16:55:10.580Z'}};
    const wrapper = mount(<HeaderComponent {...props} />);
    expect(shallow(<HeaderComponent {...props} />).length).equal(1);
  });
})

describe('HeaderComponent',()=>{
  it('render without any errors', ()=>{
    const props = {companyInfo : {companyName:'Infosys',companyMotto : 'Success', companyEst : '2018-01-17T16:55:10.580Z'}};
    const wrapper = mount(<HeaderComponent {...props} />);
    expect(shallow(<HeaderComponent {...props} />).length).equal(1);
  });
})

