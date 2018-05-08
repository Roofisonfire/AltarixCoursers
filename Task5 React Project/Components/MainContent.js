import React, { Component } from 'react';
import logo from './logo.svg';

class MainContent extends Component {
render() {
    return (
      <div className="App-content-block">
        <img src={logo}  className="App-logo" alt="logo" />
        <div className="App-content-block-text">
          Тут будет текст пользователя ыаывааыаыаыыв
        </div>
      </div>
    );
  }
}
export default MainContent 