import React from 'react';

import Counter from './components/counter/counter';
import Incrementer from './components/incrementer/incrementer';
import Decrementer from './components/decrementer/decrementer';

import('./app.scss');

export default function App() {
  return (
    <div className="App">
      <>
        <Incrementer />
        <Counter />
        <Decrementer />
      </>
    </div>
  );
}
