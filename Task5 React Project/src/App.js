import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import { db } from './firebase.js'




class Chat extends Component {
    state = {
    posts:[] 
    }
    
    addMessage = push =>{
        const now = Date.now()
        const message ={
        id: now,
        name: "Павел Шунайлов",
        text: push,   
        }
        db.ref(`/messages/${now}`).set(message);
       
            
    }
    
    componentDidMount(){
       const messageRef=db.ref('messages');
       messageRef.on('value',(snapshot)=>{
       const messages = snapshot.val();
       this.state.posts=Object.values(messages);
       console.log(this.state.posts);
       this.setState({
        posts: this.state.posts
       })
          
       })   
    }
    
    
    

  render() {
    return (
    <div>
      <Header/>
      <Main items={this.state.posts}/>
      <Footer addMessage={this.addMessage}/>
    </div>  
    );
  }
}

export default Chat



