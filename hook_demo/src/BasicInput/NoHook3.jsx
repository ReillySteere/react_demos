// Code Taken from "React Today and Tomorrow and 90% Cleaner React With Hooks"
// ReactConf 2018 Introduction Presentation and modified by Reilly Steere
// Source: https://youtu.be/dpw9EHDh2bM

import React from 'react';
import Row from './Row/Row';
import ThemeContext from '../ThemeContext';

import './BasicInput.css';

export default class NoHook3 extends React.Component {
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
      <ThemeContext.Consumer>
        { (theme) => (
          <section className={theme}>
            <span>
              No Hook - Now with theme provided by external actor
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
        )}
      </ThemeContext.Consumer>

    )
  }
}
