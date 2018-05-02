import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class Header extends Component {
  render() {
    return (
      <div className="App-block1">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome Pavel</h1>
        </header>
      </div>
    );
  }
}

class MainContent extends Component {
render() {
    return (
      <div className="App-content-block">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-content-block-text">
          Тут будет текст пользователя
        </div>
      </div>
    );
  }
}

class Main extends Component {
render() {
    return (
      <div className="App-block2">
        <MainContent/>
      </div>
    );
  }
}

class Footer extends Component {
render() {
    return (
      <div className="App-block3">
        <input className="intext" value="  Вводимый текст"/>
        <button className="outtext">Отправить</button>
      </div>
    );
  }
}

class Chat extends Component {
  render() {
    return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>  
    );
  }
}

export default Chat



