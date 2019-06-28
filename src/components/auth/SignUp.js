import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authAction";
import "./sign.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Footer from '../layout/Footer';

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
        <div className="fixed_size">
          <Form className="form" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>輸入信箱</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                type="email"
                id="email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>輸入密碼</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>輸入姓氏(羅馬拼音)</Form.Label>
              <Form.Control
                type="text "
                placeholder="輸入您的英文姓氏"
                id="firstName"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>輸入姓名(羅馬拼音)</Form.Label>
              <Form.Control
                type="text"
                placeholder="輸入您的英文姓名"
                id="lastName"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              註冊
            </Button>
            {authError ? (
              <div className="authError">{authError}</div>
            ) : null}
          </Form>
        </div>
        <Footer />
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
    signUp: newUser => {
      dispatch(signUp(newUser));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
