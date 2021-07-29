// Code Taken from "React Today and Tomorrow and 90% Cleaner React With Hooks"
// ReactConf 2018 Introduction Presentation and modified by Reilly Steere
// Source: https://youtu.be/dpw9EHDh2bM

import React, { useState } from 'react';
import Row from './Row/Row';

import './BasicInput.css';

export default function UseHooks() {
  const [name, setName] = useState('Mary');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <section className="useStateHookSection">
      <span>
        Use State Hook
      </span>
      <Row label="Name">
        <input
          value={name}
          onChange={handleNameChange}
        />
      </Row>
      <span className="value">
        {name}
      </span>
    </section>
  )
}
