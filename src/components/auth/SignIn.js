import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../index";


class SignIn extends Component {
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
  };
  render() {
    return (
      <div className="SignIn">
        <Link to="/signin">
          <form onSubmit={this.handleSubmit}>
            <h5>sign in </h5>
            <label htmlFor="email">email</label>
            <input type="email" id="email" onChange={this.handleChange} />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
            />
            <div>
              <button>login in</button>
            </div>
          </form>
        </Link>
      </div>
    );
  }
}
export default SignIn;
