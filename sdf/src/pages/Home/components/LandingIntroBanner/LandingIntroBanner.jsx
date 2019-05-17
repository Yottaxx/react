import React, { Component } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import { Button } from '@alifd/next';
import './LandingIntroBanner.scss';

// 寻找背景图片可以从 https://unsplash.com/ 寻找
const ScrollOverPack = ScrollAnim.OverPack;
const backgroundImage = require('./images/TB1j9kWgvDH8KJjy1XcXXcpdXXa-1680-870.jpg');

export default class LandingIntroBanner extends Component {
  static displayName = 'LandingIntroBanner';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // 登录介绍页面默认撑满一屏高度
    return (
      <div className="landing-intro-banner-wrapper">
        <div style={styles.landingIntro}>
          <ScrollOverPack>
            <div
              style={{
              ...styles.landingIntroBackground,
              backgroundImage: `url(${backgroundImage})`,
            }}
            />
            <div
              className="landing-intro-banner-content-wrapper"
              style={styles.contentWrapper}
            >
              <div>
                <h2 style={styles.title}>
                开荒、探险、前行<br />欢迎使用 听从无声
                </h2>
                <div style={styles.buttons}>
                  <a href="#">
                    <Button
                      style={{
                      margin: '0 10px 20px',
                      height: 50,
                      padding: '0 58px',
                      fontSize: 16,
                      color: '#fff',
                    }}
                      type="primary"
                      size="large"
                      ghost
                    >
                    返回首页
                    </Button>
                  </a>
                  <a href="//localhost:4445/#/page8">
                    <Button
                      style={{
                      margin: '0 10px 20px',
                      height: 50,
                      padding: '0 58px',
                      fontSize: 16,
                    }}
                      type="primary"
                      size="large"
                    >
                    立即使用
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </ScrollOverPack>
        </div>
      </div>

    );
  }
}

const styles = {
  landingIntro: {
    position: 'relative',
    height: '100vh',
  },
  landingIntroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: 'cover',
  },
  contentWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    letterSpacing: '1.94px',
    lineHeight: '48px',
  },
  buttons: { textAlign: 'center', marginTop: 70 },
};
