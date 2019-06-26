import React from 'react';

import Counter from './components/counter/counter';
import Incrementer from './components/incrementer/incrementer';
import Decrementer from './components/decrementer/decrementer';
import ContextProvider from './components/context/counter-context';

import('./app.scss');

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <>
          <Incrementer />
          <Counter />
          <Decrementer />
        </>
      </div>
    </ContextProvider>
  );
}
