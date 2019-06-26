import React from 'react';
import { CounterContext } from '../context/counter-context';

export default class Decrementer extends React.Component {
  render() {
    return (
      <>
        <CounterContext.Consumer>
          {(context) => {
            return (
              <>
                <button className="down clicker" onClick={context.decrement}>
                  -
                </button>
              </>
            );
          }}
        </CounterContext.Consumer>
      </>
    );
  }
}
