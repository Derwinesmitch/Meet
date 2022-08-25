Feature: Show/hide an events details

Scenario: An event element is collapsed by default
Given user opens the app
When an event is displayed
Then the event details will be collapsed

Scenario: User can expand an event to see its details
Given: the user searched for an event
When: the user clicks on show details button
THen: the event details will be displayed

Scenario: User can collapse an event to hide its details
Given: user has clicked on an event which shows details
When: user clicks on hide button
Then: the event details will close