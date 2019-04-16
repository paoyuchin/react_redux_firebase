import React, { Component } from "react";
class SignUp extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    // console.log(e);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>sign Up </h5>
          <label htmlFor="email">email</label>
          <input type="email" id="email" onChange={this.handleChange} />
          <label htmlFor="firstname">first name</label>
          <input type="text" id="firstname" onChange={this.handleChange} />
          <label htmlFor="lastname">lastname</label>
          <input type="text" id="lastname" onChange={this.handleChange} />
          <div>
            <button>login in</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp; 
