import React, { Component } from 'react';
class Footer extends Component {
  handleSubmit = event => {
    event.preventDefault()
    let input = event.target.elements.input
    this.props.addMessage(input.value)
      
  }

  render() {
    return (
      <form className="App-block3" onSubmit={this.handleSubmit}> 
        <input id="input" className="intext" type="text"/>
        <input className="outtext" type="submit" value="Submit"/>
      </form>
    );
  }
}
export default Footer 