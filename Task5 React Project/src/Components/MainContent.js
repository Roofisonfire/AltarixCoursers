import React, { Component } from 'react';
import logo from './logo.svg';

class MainContent extends Component {
render() {
    return (
    <div>   
    {this.props.content.map(el=>(
      <div className="App-content-block" key={el.id}>
        
        <img src={logo}  className="App-logo" alt="logo" />
        
        <div className="App-content-block-text">
        <h1>{el.name}</h1>
        <p>{el.text}</p>
        </div>
        
      </div>
    
      
    )   
    
)
}
</div>
);
}
}
export default MainContent 