import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from "./Form";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",

};

change = e => {
  this.setState({
    [e.target.name]: e.target.value
  });

};

onSubmit = () => {
  
  this.props.onSubmit(this.state);
  console.log(this.state);
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Login Page</h1>
        </header>
           
       
    <form>

    <input
    name='firstName'
    placeholder="First name"
     value={this.state.firstName}
     onChange={e => this.change(e)}
     />
     <br />
      
    <input
     name='lastName'
     placeholder="Last name"
     value={this.state.lastName}
     onChange={e => this.change(e)}
     />
     <br />

     <input
     name='username'
     placeholder="Username"
     value={this.state.username}
     onChange={e => this.change(e)}
     />
     <br />

     <input
     name='email'
     placeholder="Email"
     value={this.state.email}
     onChange={e => this.change(e)}
     />
     <br />

     <input
     name='password'
     type='password'
     placeholder="Password"
     value={this.state.password}
     onChange={e => this.change(e)}
     />
     <br />

<button onClick={() =>this.onSubmit()}>Submit</button>     
    </form>
   </div>   
    );
  }
}

export default App;
