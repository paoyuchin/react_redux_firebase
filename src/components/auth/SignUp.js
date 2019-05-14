import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authAction";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h5>LOGIN IN(註冊</h5>
          <label htmlFor="email">email</label>
          <input type="email" id="email" onChange={this.handleChange} />
          <label htmlFor="password">password</label>
          <input type="password" id="password" onChange={this.handleChange} />
          <label htmlFor="firstName">first name</label>
          <input type="text" id="firstName" onChange={this.handleChange} />
          <label htmlFor="lastName">lastname</label>
          <input type="text" id="lastName" onChange={this.handleChange} />
          {authError ? <div className="authError">{authError}</div> : null}
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
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: (newUser)=>{dispatch(signUp(newUser))}
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp); 
