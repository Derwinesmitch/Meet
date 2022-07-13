import React from 'react';
import { shallow } from 'enzyme';
import NumberOfEvents from '../NumberOfEvents';
describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {    
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
            });
      
  test('render text input', () => {
    expect(NumberOfEventsWrapper.find('.eventNumbersList')).toHaveLength(1);
  });
  
  test('react to change of state', () => {
    NumberOfEventsWrapper.setState({ eventNumbers: 13 });
    expect(NumberOfEventsWrapper.state('eventNumbers')).toEqual(13);   
  });


  test('change number of events when number input changes', () => {
    NumberOfEventsWrapper.setState({ eventNumbers: 13});
    NumberOfEventsWrapper.find('.eventNumbersList').simulate('change', { target: { value: 5 }});
    expect(NumberOfEventsWrapper.state('eventNumbers')).toEqual(5);
  });
});