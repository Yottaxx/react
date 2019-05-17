import React, { Component } from 'react';
import RightContentDisplay from './components/RightContentDisplay';

export default class Page10 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page10-page">
        <RightContentDisplay />
      </div>
    );
  }
}
