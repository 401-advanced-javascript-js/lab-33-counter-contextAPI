/* eslint-disable react/prop-types */

import React from 'react';

export const CounterContext = React.createContext();

export default class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement,
    };
  }

  updateCounter = (count) => {
    let polarity = '';
    if (count > 0) {
      polarity = 'positive';
    } else if (count < 0) {
      polarity = 'negative';
    }
    this.setState({ count, polarity });
  };

  increment = (event) => {
    event.preventDefault();
    this.updateCounter(this.state.count + 1);
  };

  decrement = (event) => {
    event.preventDefault();
    this.updateCounter(this.state.count - 1);
  };

  render() {
    return (
      <CounterContext.Provider value={this.state}>
        {/* Everything inside Context.Provider will have access it its context */}
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}
