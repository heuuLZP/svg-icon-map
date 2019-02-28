import React, { Component } from 'react';
import SvgIcon from './components/SvgIcon.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <SvgIcon iconClass="love"></SvgIcon>
            <span>love</span>
          </li>
          <li>
            <SvgIcon iconClass="alipay"></SvgIcon>
            <span>alipay</span>
          </li>
          <li>
            <SvgIcon iconClass="wechat"></SvgIcon>
            <span>wechat</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
