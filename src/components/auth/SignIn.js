import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../index";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authAction";
import { signInWithGoogleAccount } from "../../store/actions/authAction";
import { Redirect } from "react-router-dom";
import firebase from "firebase/app";
import "./sign.scss";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Alert } from "react-bootstrap";
import Footer from "../layout/Footer";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    img: "https://www.pakutaso.com/shared/img/thumb/kuchikomi733_TP_V.jpg"
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

  singInWithGoogle = () => {
    this.props.signInWithGoogleAccount();
  };
  componentWillUnmount = () => {
    // use intervalId from the state to clear the interval
    clearInterval(this.sequentialImg);
  };

  componentDidMount = () => {
    var img = [
      "https://www.pakutaso.com/shared/img/thumb/kuchikomi731_TP_V.jpg",
      "https://www.pakutaso.com/shared/img/thumb/kuchikomi735_TP_V.jpg",
      "https://www.pakutaso.com/shared/img/thumb/kuchikomi736_TP_V.jpg"
    ];
    var img_len = img.length;
    var i = 0;
    this.sequentialImg = () => {
      this.setState({
        img: img[i]
      });
      i++;
      if (i >= img_len) {
        i = 0;
      }
    };

    setInterval(this.sequentialImg, 1000);
  };

  render() {
    const { authError, auth } = this.props;
    const { img } = this.state;
    if (auth.uid) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="fixed_size">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>輸入你的帳號</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                id="email"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>輸入你的密碼</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              登入
            </Button>
            <div>{authError ? <p>{authError}</p> : null}</div>
          </Form>
          <div>懶得登入? 用google一鍵登入</div>
          <div className="googleBtn" onClick={this.singInWithGoogle}>
            <img src="https://arts.co.at/Content/Images/googleconnect.png" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: crediential => {
      dispatch(signIn(crediential));
    },
    signInWithGoogleAccount: () => {
      dispatch(signInWithGoogleAccount());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
