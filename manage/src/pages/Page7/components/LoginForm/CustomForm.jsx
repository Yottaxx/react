/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Message } from '@alifd/next';
import AuthForm from './AuthForm';


export default class LoginFrom extends Component {
  static displayName = 'LoginFrom';

  static propTypes = {};

  static defaultProps = {};

  formChange = (value) => {
    console.log('formChange:', value);
  };

  handleSubmit = (errors, values) => {
    if (errors) {
      console.log('errors', errors);
      return;
    }
    console.log('values:', values);
    Message.success('登录成功');
    // alert(' 登录成功！ ');
    // top.location = 'Home.jsx';
    window.location.href = '//172.24.2.149:4444';
    // 登录成功后做对应的逻辑处理
  };

  render() {
    const config = [
      {
        label: '用户名',
        component: 'Input',
        componentProps: {
          placeholder: '用户名',
          size: 'large',
          maxLength: 20,
        },
        formBinderProps: {
          name: 'name',
          required: true,
          message: '必填',
        },
      },
      {
        label: '密码',
        component: 'Input',
        componentProps: {
          placeholder: '密码',
          htmlType: 'passwd',
        },
        formBinderProps: {
          name: 'passwd',
          required: true,
          message: '必填',
        },
      },
      {
        label: '记住账号',
        component: 'Checkbox',
        componentProps: {},
        formBinderProps: {
          name: 'checkbox',
        },
      },
      {
        label: '登录',
        component: 'Button',
        componentProps: {
          type: 'primary',
        },
        formBinderProps: {},
      },
    ];

    const initFields = {
      name: '',
      passwd: '',
      checkbox: false,
    };

    const links = [
      { to: '//172.24.2.149:4444', text: '立即注册' },
      { to: '/forgetpassword', text: '找回密码' },
    ];

    return (
      <AuthForm
        title="登录"
        config={config}
        initFields={initFields}
        formChange={this.formChange}
        handleSubmit={this.handleSubmit}
        links={links}
      />
    );
  }
}

