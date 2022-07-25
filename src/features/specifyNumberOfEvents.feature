Feature: Specify number of events

Scenario: When user hasnt specified a numer, 32 is the default number
    Given the user is searching for a city
    When the user did not specify number of events 
    Then the default list will show 32


    Scenario: User can change the number of events to load
    Given user started a search
    When the user enters number into number of events field
    Then the number of listed events should match this number