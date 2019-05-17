import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

export default () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Row wrap>
          <Col l="18">
            <p style={styles.title}>our slogan</p>
            <p style={styles.desc}>
              让未来在现在（
              <a href="#" style={styles.link}>
                <b>Future is now</b>
              </a>
              ）、人工智能（
              <a href="#" style={styles.link}>
                <b>AI</b>
              </a>
              ）、唇语识别（
              <a href="#" style={styles.link}>
                <b>detection</b>
              </a>
              ）、实时翻译（
              <a href="#" style={styles.link}>
                <b>now time</b>
              </a>
              ）、大胆想象（
              <a href="#" style={styles.link}>
                <b>JUST DO IT</b>
              </a>
              ）、无限可能（
              <a href="#" style={styles.link}>
                <b>nothing is impossible</b>
              </a>
              ）、期待合作、投资、推广
            </p>
          </Col>
          <Col l="6">
            <div style={styles.rightContent}>
              <img
                src={require('./images/qrcode.png')}
                alt=""
                style={styles.qrcode}
              />
              <div style={styles.textBox}>
                <p style={styles.subtit}>扫描二维码</p>
                <p style={styles.text}>
                  与我们一起共建美好未来
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: '#0e0e0e',
    padding: '54px 0 70px',
  },
  content: {
    maxWidth: '1200px',
    margin: ' 0 auto',
  },
  title: {
    fontSize: '18px',
    lineHeight: '26px',
    color: '#fff',
  },
  desc: {
    fontSize: '12px',
    lineHeight: '20px',
    color: '#fff',
    textAlign: 'justify',
    marginTop: '14px',
    maxWidth: '830px',
  },
  link: {
    color: '#00b7d3',
  },
  rightContent: {
    position: 'relative',
  },
  textBox: {
    paddingLeft: '100px',
  },
  qrcode: {
    width: '82px',
    height: '82px',
    position: 'absolute',
    top: '0',
    left: '0',
  },
  subtit: {
    fontWeight: '400',
    fontSize: '16px',
    color: '#fff',
    lineHeight: '22px',
  },
  text: {
    fontSize: '12px',
    color: '#666',
    lineHeight: '18px',
    marginTop: '6px',
  },
};
