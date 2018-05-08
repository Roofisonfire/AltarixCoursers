import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'



class Chat extends Component {
    state = {
    messages: []
    }
    addMessage = message =>{
        this.state.messages.push({
        id: Date.now(),
        authorName: "Павел",
        text: message,
        flag: true
    })
      console.log(this.state)  
    this.setState({
        messages: this.state.messages
    })
        
    }

  render() {
    return (
    <div>
      <Header/>
      <Main/>
      <Footer addMessage={this.addMessage}/>
    </div>  
    );
  }
}

export default Chat



