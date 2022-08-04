import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {
  state = {
    eventNumbers: 32,
    infoText: '',
  }

  handleInputChanged = (event) => {
    let inputValue = event.target.value;
    if (inputValue >= 33 || inputValue <= 0) {
      this.setState({
        eventNumbers: inputValue,
        infoText: 'enter valid number between 1 and 32',
      });
    } else {
      this.setState({
        eventNumebers: event.target.value,
        infoText: '',
      });
    }

        this.props.updateEvents(undefined, inputValue);
    }

  render() {
    return (
      <div className="eventNumbers">
        <ErrorAlert text={this.state.infoText} />
        <input
          className="eventNumbersList"
          type="number"
          value={this.state.eventNumbers}
          onChange={this.handleInputChanged}
          />
      </div>
    );
  }
}

export default NumberOfEvents;