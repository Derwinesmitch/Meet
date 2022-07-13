import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    eventNumbers: 32,
  }

  inputChanged = (event) => {
    const numberValue = parseInt(event.target.value)
        this.setState({
            eventNumbers : numberValue
        });
        this.props.setNumberOfEvents(numberValue);
    }

  render() {
    return (
      <div className="eventNumbers">
        <input
          className="eventNumbersList"
          type="number"
          onChange={this.handleInputChanged}
          value={this.state.eventNumbers}
          />
      </div>
    );
  }
}

export default NumberOfEvents;