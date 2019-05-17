import React, { Component } from 'react';
import PlatformLanding from './components/PlatformLanding';

export default class Page8 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page8-page">
        {/* 平台登陆引导页面 */}
        <PlatformLanding />
      </div>
    );
  }
}
