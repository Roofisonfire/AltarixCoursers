import React, { Component } from 'react';

import MainContent from './MainContent'

class Main extends Component {
     

render() {
    return (
      <div className="App-block2">
     
        <MainContent content={this.props.items} />
        
      </div>
    );
   } 
  }

export default Main 