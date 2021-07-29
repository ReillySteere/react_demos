// Code Taken from "React Today and Tomorrow and 90% Cleaner React With Hooks"
// ReactConf 2018 Introduction Presentation and modified by Reilly Steere
// Source: https://youtu.be/dpw9EHDh2bM

import React from 'react';
import Row from './Row/Row';

import './BasicInput.css';

export default class NoHook2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Mary',
      surname: 'Poppins',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSurnameChange = this.handleSurnameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleSurnameChange(e) {
    this.setState({
      surname: e.target.value,
    });
  }

  render() {
    const { name, surname } = this.state;
    return (
      <section className="noHookSection">
        <span>
          No Hook - Now with two state variables
        </span>
        <Row label="Name">
          <input
            value={name}
            onChange={this.handleNameChange}
          />
        </Row>
        <Row label="Surname">
          <input
            value={surname}
            onChange={this.handleSurnameChange}
          />
        </Row>
        <span className="value">
          {`${name} ${surname}`}
        </span>
      </section>
    )
  }
}
