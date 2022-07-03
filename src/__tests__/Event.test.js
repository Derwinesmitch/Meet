import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';


describe('<Event /> component', () => {
    let  EventWrapper;
    beforeAll(() => {    
        EventWrapper = shallow(<Event event={mockData[0]} />);    
      });
    
      test('render event', () => {
        expect(EventWrapper.find('.event')).toHaveLength(1);
      });
      test('render event name', () => {
        expect(EventWrapper.find('.eventName')).toHaveLength(1);
      });
      test('render date and  time', () => {
        expect(EventWrapper.find('.timeAndDate')).toHaveLength(1);
      });
      test('render location', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1);
      });
      test('render event details', () => {
        expect(EventWrapper.find('.details')).toHaveLength(1);
      });
      test('render show description on click', () => {
        EventWrapper.setState({ collapsed: false });
        EventWrapper.find('.buttonDetails').simulate('click')
        expect(EventWrapper.state('collapsed')).toBe(true);

      });
    });