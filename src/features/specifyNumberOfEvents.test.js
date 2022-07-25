import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    let AppWrapper;
    test('When user hasnt specified a numer, 32 is the default number', ({ given, when, then }) => {
        given('the user is searching for a city', () => {

        });

        when('the user did not specify number of events ', () => {
            AppWrapper = mount(<App />);

        });

        then('the default list will show 32', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length)
        });
    });
    
    
    test('User can change the number of events to load', ({ given, when, then }) => {
        given('user started a search', () => {
            AppWrapper = mount(<App />);
        });

        when('the user enters number into number of events field', () => {
            AppWrapper.update();
            AppWrapper.find('.numberOfEvents').simulate('change', {target: {value: 2}})
        });

        then('the number of listed events should match this number', () => {
            expect(AppWrapper.find('.event')).toHaveLength(5)
        });
    });
    
})