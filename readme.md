Meet App

This application allows users to check what events occur in a given city



2: As a user
I should be able to show or hide an events detail
so that I can see more information about an  event

3: As a user
I should be able to specify the number of events I want loaded
so that I can decide how many i want to view

4: As a user
I should be able to use the app offline
so that I can access the info even without internet conection

5: As a user
I should be able to view data
so that I can view all the events


2.1: Given: the main page is open
     When: the user looks for events
     Then: info about specific events should be collapsed

2.2: Given: the user expands an event
     When: user clicks on event
     Then: event should open to display info

2.3: Given: the user collapses an event
     When: user clicks on hide
     Then: event info collapses

3.1: Given: the user has not specified a number
     When: he is looking at events
     Then: app will load 32 events

3.2: Given: user sets a limit number of events  
     When: user is looking at events
     Then: display user limit 

4.1: Given: there is no conection to internet
     When: user opens app
     Then: cashed data is shown

4.2: Given: there is no conection to internet
     When: user changes the settings city or time range
     Then: show error

5.1: Given: User looks for cities
     When: user clicks on map
     Then: show chart with number of events in each city