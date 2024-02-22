// Landing.test.js
import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Landing />);
    
    // Check if the h1 element has the correct text
    expect(wrapper.find('h1').text()).toEqual('Code Prep');
    
    // Check if the first h3 element has the correct text
    expect(wrapper.find('h3').at(0).text()).toEqual('/Study/Practice/Learn/');
    
    // Check if the p element has the correct text
    expect(wrapper.find('p').text()).toEqual('Code Prep is designed to give new developers the tools to study the fundamentals of web development through flashcards, videos and coding challenges.');

    // Check if the second h3 element has the correct text
    expect(wrapper.find('h3').at(1).text()).toEqual('Build Cool Stuff!');
  });
});

