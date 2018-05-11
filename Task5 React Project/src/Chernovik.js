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
        this.state.posts.push(message);
        db.ref(`/messages/${now}`).set(message);
        
        
    
    this.setState({
        posts: this.state.posts
    })
        
    }
    
    componentDidMount(){
       const messageRef=db.ref('messages');
       messageRef.on('value',(snapshot)=>{
           const messages = snapshot.val();
           console.log(messages);
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