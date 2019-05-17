import React, { Component } from 'react';
import SlideBanner from './components/SlideBanner';

export default class ht extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ht-ht">
        {/* 滑动banner 用于层叠展示 */}
        <SlideBanner />
      </div>
    );
  }
}
