import React, { Component } from 'react';
import { Button } from '@alifd/next';
import MediaUtils, { begin_video, startRecord, stopRecord, playRecord, start, send, fun2, totalbegin } from './tt.js';


export default class RightContentDisplay extends Component {
  static displayName = 'RightContentDisplay';

  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className="right-content-display" style={styles.container}>
        <div className="right-content-display-content" style={styles.content}>
          {/*<div style={styles.col}>*/}
          {/*  <h2 style={styles.title}>识别文字</h2>*/}
          {/*  <p style={styles.description}>*/}
          {/*    我们在发声*/}
          {/*  </p>*/}
          {/*</div>*/}
          <div style={styles.col} className="title">
            <video loop muted preload="auto" controls />
            <button onClick={totalbegin}>开始本次发送</button>
            {/* <button onClick={send}>send</button> */}
            {/* <button onClick={start}>start</button> */}
            <button id="shot">开始录制</button>
            <button id="over">结束录制</button>
            <canvas id="canvas" />
            {/* <Button */}
            {/* style={styles.secondaryButton} */}
            {/* type="normal" */}
            {/* > */}
            {/*  开始 */}
            {/* </Button> */}
            {/* <Button */}
            {/*  style={styles.primaryButton} */}
            {/*  type="primary" */}
            {/* > */}
            {/*  上传 */}
            {/* </Button> */}
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '80px 0',
  },
  content: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    overflow: 'hidden',
  },
  col: {
    width: '48%',
    padding: '0 1%',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
  },
  description: {
    color: '#999',
    lineHeight: '22px',
  },
  image: {
    width: '100%',
    margin: '0 auto',
    display: 'block',
    maxWidth: '360px',
  },
};
