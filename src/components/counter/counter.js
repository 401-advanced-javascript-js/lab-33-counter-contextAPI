import React from 'react';
import { CounterContext } from '../context/counter-context';

// import Incrementer from '../incrementer/incrementer';
// import Decrementer from '../decrementer/decrementer';

import('./counter.scss');

export default class Counter extends React.Component {
  render() {
    return (
      <>
        <CounterContext.Consumer>
          {(context) => {
            const classes = ['count', context.polarity].join(' ');
            return (
              <>
                <section className="counter">
                  <span className={classes}>{context.count}</span>
                </section>
              </>
            );
          }}
        </CounterContext.Consumer>
      </>
    );
  }
}
