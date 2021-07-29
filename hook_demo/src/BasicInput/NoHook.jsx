// Code Taken from "React Today and Tomorrow and 90% Cleaner React With Hooks"
// ReactConf 2018 Introduction Presentation and modified by Reilly Steere
// Source: https://youtu.be/dpw9EHDh2bM

import React from 'react';
import Row from './Row/Row';

import './BasicInput.css';

export default class NoHook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Mary',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <section className="noHookSection">
        <span>
          No Hook
        </span>
        <Row label="Name">
          <input
            value={name}
            onChange={this.handleNameChange}
          />
        </Row>
        <span className="value">
          {name}
        </span>
      </section>
    )
  }
}
