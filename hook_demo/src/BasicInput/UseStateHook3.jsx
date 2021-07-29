// Code Taken from "React Today and Tomorrow and 90% Cleaner React With Hooks"
// ReactConf 2018 Introduction Presentation and modified by Reilly Steere
// Source: https://youtu.be/dpw9EHDh2bM

import React, { useState, useContext } from 'react';
import Row from './Row/Row';
import ThemeContext from '../ThemeContext';

import './BasicInput.css';

export default function UseStateHook3() {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const theme = useContext(ThemeContext);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <section className={theme}>
      <span>
        Use State Hook - Now with two state variables
      </span>
      <Row label="Name">
        <input
          value={name}
          onChange={handleNameChange}
        />
      </Row>
      <Row label="Surname">
        <input
          value={surname}
          onChange={handleSurnameChange}
        />
      </Row>
      <span className="value">
        {`${name} ${surname}`}
      </span>
    </section>
  )
}
