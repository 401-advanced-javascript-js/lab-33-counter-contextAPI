import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorker from './serviceWorker';

import CounterContext from './components/context/counter-context';

class Main extends React.Component {
  render() {
    return (
      <CounterContext>
        <App />
      </CounterContext>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
