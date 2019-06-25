import React from 'react';
import { CounterContext } from '../context/counter-context';

export default class Incrementer extends React.Component {
  render() {
    return (
      <>
        <CounterContext.Consumer>
          {(context) => {
            return (
              <>
                <button className="up clicker" onClick={context.increment}>
                  +
                </button>
              </>
            );
          }}
        </CounterContext.Consumer>
      </>
    );
  }
}
