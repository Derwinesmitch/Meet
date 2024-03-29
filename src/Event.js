import React, { Component } from "react";

class Event extends Component {
  state = {
     collapsed: false,
  };
  
  handleClick = () => {
    this.state.collapsed
    ? this.setState({ collapsed: false })
    : this.setState({ collapsed: true });
  };
  
  buttonDescription = () => {
    if (this.state.collapsed === true) {
        return 'show details';
    } else {
      return 'hide details';
    }
    };

  
  
  render() {
    const { event } = this.props;
    
    return <div className="event">
      <h2 className="eventName">{event.summary}</h2>
      <p className="timeAndDate">{event.start.dateTime}</p>
      <p className="location">{event.location}</p>
      
      <button className="buttonDetails" onClick={this.handleClick}>{this.buttonDescription()}</button>
      {this.state.collapsed && (
            <p className="details">{event.description}</p>
            )}
    </div>;
  }
}


export default Event;