import React, { Component } from 'react';
import SlideBanner from './components/SlideBanner';

export default class Page9 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page9-page">
        {/* 滑动banner 用于层叠展示 */}
        <SlideBanner />
      </div>
    );
  }
}
