import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import ScrollAnim from 'rc-scroll-anim';

const ScrollOverPack = ScrollAnim.OverPack;

export default class AboutGeek extends Component {
  static displayName = 'AboutGeek';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <ScrollOverPack>
            <QueueAnim delay={200} duration={1000} interval={300} type="bottom">
              <div key="summary" style={styles.summary}>
                <div style={styles.num}>01_</div>
                <div style={styles.title}>About</div>
                <div style={styles.subtitle}>关于唇语识别</div>
              </div>
              <div
                key="introOne"
                style={{ ...styles.item, ...styles.introOne }}
              >
                <div style={styles.itemTitle}>听从无声</div>
                <div style={styles.itemDesc}>
                 以前，我们不同语言的交融，现在我们是同样语言的不同表达
                </div>
              </div>
              <div
                key="introTwo"
                style={{ ...styles.item, ...styles.introTwo }}
              >
                <div style={styles.itemTitle}>新声的探路者</div>
                <div style={styles.itemDesc}>
                  无回声的前行
                  无声的前行
                </div>
              </div>
            </QueueAnim>
          </ScrollOverPack>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    background: `url(${require('./images/bg.png')})`,
    backgroundSize: 'contain',
  },
  content: {
    position: 'relative',
    width: '1200px',
    margin: '0 auto',
    paddingTop: '180px',
  },
  summary: {
    marginRight: '100px',
    display: 'inline-block',
  },
  num: {
    fontSize: '64px',
    color: '#fff',
    lineHeight: '56px',
    marginBottom: '30px',
    fontWeight: '700',
  },
  title: {
    fontSize: '42px',
    color: '#fff',
    lineHeight: '42px',
    marginBottom: '15px',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: '20px',
    color: '#fff',
    lineHeight: '20px',
    marginBottom: '15px',
  },
  introOne: {
    marginBottom: '85px',
  },
  introTwo: {
    left: '40%',
  },
  item: {
    display: 'inline-block',
    width: '720px',
    position: 'relative',
    top: '54px',
  },
  itemTitle: {
    fontSize: '32px',
    lineHeight: '32px',
    paddingBottom: '20px',
    fontWeight: '700',
    letterSpacing: '2px',
    color: '#fff',
  },
  itemDesc: {
    fontSize: '14px',
    lineHeight: '25px',
    color: '#fff',
    fontWeight: '400',
  },
};
