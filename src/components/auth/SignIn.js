import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../index";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { authError } = this.props;
    return (
      <div className="SignIn">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign in!</h5>
          <label htmlFor="email">email</label>
          <input type="email" id="email" onChange={this.handleChange} />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={this.handleChange} />
          <div>
            <button>login in</button>
            <div>{authError ? <p>{authError}</p> : null}</div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: crediential => {
      dispatch(signIn(crediential));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
