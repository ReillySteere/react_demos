import React from 'react';

import { NoHook, UseStateHook } from './BasicInput';

import './App.css';

function App() {
  return (
    <div className="App">
      <NoHook name="Mary" />
      <UseStateHook name="Mary" />
    </div>
  );
}

export default App;
