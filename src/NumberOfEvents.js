import React, { Component } from 'react';
import { ErrorAlert } from './alert';

class NumberOfEvents extends Component {
  state = {
    infoText: '',
  }

  handleInputChanged = (event) => {
    const inputValue = parseInt(event.target.value);
    if (inputValue <= 32 && inputValue > 0) {
      this.setState({
        eventNumbers: inputValue,
        infoText: '',
      });
    } else {
      this.setState({
        eventNumbers: 32,
        infoText: 'enter valid number between 1 and 32',
      })
    }
    
    this.props.updateEvents(undefined, inputValue);
    };

  render() {
    const { eventNumbers } = this.props;
    return <div className="eventNumbers">
      
      
      <label>
            <input className="eventNumbersList" type="number" min="1" max="32" value={eventNumbers} onChange={this.handleInputChanged}> 
            </input>
          </label>
          <ErrorAlert text={this.state.infoText} />
      </div>
  }
}

export default NumberOfEvents;