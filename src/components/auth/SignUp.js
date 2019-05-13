import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName:'',
    lastName:''
  };
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to='/' />

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>LOGIN IN(註冊</h5>
          <label htmlFor="email">email</label>
          <input type="email" id="email" onChange={this.handleChange} />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={this.handleChange}
          />
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


const mapStateToProps = state => {
  return {
    auth: state.firebaseReducer.auth
  };
};
export default connect(mapStateToProps)(SignUp); 
