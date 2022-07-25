import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';


const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
    let AppWrapper;

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('Given user opens the app', () => {

            AppWrapped = mount(<App />);
        });

        when('an event is displayed', () => {

        });

        then('the event details will be collapsed', () => {
            expect(AppWrapper.find('.details')).toHaveLength(0)
        });
    });
    
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the user searched for an event', () => {

            AppWrapped = mount(<App />);
        });

        when('the user clicks on show details button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .buttonDetails').at(0).simulate('click');
        });

        then('the event details will be displayed', () => {
            expect(AppWrapper.find('.event .details')).toHaveLength(1)
        });
    });
    
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('user has clicked on an event which shows details', () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .buttonDetails').at(0).simulate('click');
        });

        when('user clicks on hide button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .buttonDetails').at(0).simulate('click');

        });

        then('the event details will close', () => {
            expect(AppWrapper.find('.event .details')).toHaveLength(0)
        });
    });    
})