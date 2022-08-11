import React, { Component } from 'react';
import {
  ScatterChart,
  Scatter, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';

import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from './api';
import './nprogress.css';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    locationSelected: 'all',
    showWelcomeScreen: undefined
  };
  
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
        getEvents().then((events) => {
          if (this.mounted) {
            this.setState({ events: events.slice(0, this.state.numberOfEvents), locations: extractLocations(events) });
          }
        });
      }
    }

  componentWillUnmount(){
    this.mounted = false;
  }
  
  getData = () => {
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event) => event.location === location).length
      const city = location.split(',').shift()
      return {city, number};
    })
    return data;
  };


  updateEvents = (location, eventCount) => {
    if (eventCount === undefined) {
       eventCount = this.state.numberOfEvents;
    } else (
      this.setState({ numberOfEvents: eventCount})
    )
    if (location === undefined) {
      location = this.state.locationSelected;
    }
    getEvents().then((events) => {
      const locationEvents = (location === 'all') 
      ? events 
      : events.filter((event) => event.location === location);
     if (this.mounted) {
        this.setState({
        events: locationEvents.slice(0, eventCount),
        numberOfEvents: eventCount,
        locationSelected: location,
      });
     }
    });
  }


  // setNumberOfEvents = (numberOfEvents) => {
  //   this.setState({
  //     numberOfEvents,
  //   });
  //   this.updateEvents(undefined, numberOfEvents);
  // };



  render() {
   const { events } = this.state;
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <NumberOfEvents numberOfEvents={this.state.numberOfEvents} updateEvents = { this.updateEvents} />s
        <ResponsiveContainer height={400} >
          <ScatterChart
            margin={{
              top: 20, right: 20, bottom: 20, left: 20,
            }} >
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis allowDecimals={false} type="number" dataKey="number" name="number of events" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList  events={this.state.events} updateEvents={this.updateEvents} numberOfEvents={this.state.numberOfEvents} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }} />
      </div>
    );
  }
}
export default App;

