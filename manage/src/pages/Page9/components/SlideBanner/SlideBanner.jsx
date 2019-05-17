import React, { Component } from 'react';
import './index.scss';

export default class SlideBanner extends Component {
  static displayName = 'SlideBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  isSelected = (selected) => (selected ? ' selected' : '');

  onMouseEnter = (event) => {
    const { index } = event.currentTarget.dataset;
    const selectedIndex = parseInt(index, 10);
    if (!isNaN(selectedIndex)) {
      this.setState({
        selectedIndex,
      });
    }
  };

  render() {
    const { selectedIndex } = this.state;
    return (
      <div className="hy-friends-list">
        <a
          href="//172.24.2.149:4444"
          className={`hy-friends-item ${selectedIndex === 0 ? 'selected' : ''}`}
          data-index="0"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            className="hy-friends-img"
            src={require('./images/CdqiMTPofpGZyLcJkDHX.jpg')}
            alt=""
          />
          <h4>VGG</h4>
          <span>你懂吧</span>
          <p>
            帅就完事了
          </p>
          <img
            className="hy-friends-qr"
            src={require('./images/MhShJeukuJNkenGytSiq.svg')}
            alt=""
          />
        </a>

        <a
          href="//172.24.2.149:4444"
          className={`hy-friends-item ${selectedIndex === 1 ? 'selected' : ''}`}
          data-index="1"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            className="hy-friends-img"
            src={require('./images/ZWoRmVSYImddLaRYyQog.jpg')}
            alt=""
          />
          <h4>Transformer</h4>
          <span>ByteSentenceNet</span>
          <p>
            对就完事了
          </p>
          <img
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            alt=""
          />
        </a>

        <a
          href="//172.24.2.149:4444"
          className={`hy-friends-item ${selectedIndex === 2 ? 'selected' : ''}`}
          data-index="2"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            className="hy-friends-img"
            src={require('./images/MHiDpDgUNShsjTCQXKKd.jpg')}
            alt=""
          />
          <h4>灵感来源</h4>
          <span>让无声新生</span>
          <p>
            让未来在现在
          </p>
          <img
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            alt=""
          />
        </a>

        <a
          href="//localhost:4445"
          className={`hy-friends-item ${selectedIndex === 3 ? 'selected' : ''}`}
          data-index="3"
          onMouseEnter={this.onMouseEnter}
        >
          <img
            className="hy-friends-img"
            src={require('./images/JQBQcVBtAiyTGINHQNzh.jpg')}
            alt=""
          />
          <h4>创作者团队</h4>
          <span>CQUers</span>
          <p>
            不愿透露姓名的某+某+某同学
          </p>
          <img
            className="hy-friends-qr"
            src={require('./images/cONkAwDeKdlzkcgchJLT.png')}
            alt=""
          />
        </a>
      </div>
    );
  }
}
