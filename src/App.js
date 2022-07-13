import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import { getEvents, extractLocations } from './api';
import './nprogress.css';
import NumberOfEvents from './NumberOfEvents';
class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: 'all'
  };
  


  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
       eventCount = this.state.numberOfEvents;
    }
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
        numberOfEvents: eventCount,
        locationSelected: location,
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events: events, locations: extractLocations(events) });
      }
    });
  }

  setNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents,
    });
    this.updateEvents(undefined, numberOfEvents);
  };

  componentWillUnmount(){
    this.mounted = false;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} setNumberOfEvents = { this.setNumberOfEvents} />
        <EventList  events={this.state.events} />
      </div>
    );
  }
}
export default App;

