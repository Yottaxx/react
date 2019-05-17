import React, { Component } from 'react';
import LoginForm from './components/LoginForm';

export default class Page7 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page7-page">
        {/* 左右布局带背景图的登录表单页 */}
        <LoginForm />
      </div>
    );
  }
}
