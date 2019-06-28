import React, { Component } from "react";
import { connect } from "react-redux";
import { MakeReviewAction } from "../../store/actions/reviewActions";
import { Redirect } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class MakeReview extends Component {
  state = {
    title: "",
    content: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    const { auth } = this.props;
    this.props.MakeReviewAction(this.state);
    this.props.history.push("/");
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) {
      alert(
        "please sign in before makes review, page will reload to sign in page automatically"
      );
      return <Redirect to="/signin" />;
    }
    return (
      // <div>
      //   <form onSubmit={this.handleSubmit}>
      //     <h5>CREATE MY PROJECT</h5>
      //     <label htmlFor="title">title</label>
      //     <input type="text" id="title" onChange={this.handleChange} />
      //     <label htmlFor="content">Project content</label>
      //     <textarea id="content" onChange={this.handleChange} />
      //     <div>
      //       <button>submit</button>
      //     </div>
      //   </form>
      // </div>
      <div className="fixed_size">
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>請輸入你的主旨與評論</Form.Label>
          <Form.Group>
            <Form.Label>輸入主旨</Form.Label>
            <Form.Control type="text" id="title" onChange={this.handleChange} placeholder="輸入主旨"/>
          </Form.Group>

          <Form.Group>
            <Form.Label>留言內容</Form.Label>
            <Form.Control id="content" onChange={this.handleChange} placeholder="輸入內容"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            我要留言
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToPros = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    MakeReviewAction: review => dispatch(MakeReviewAction(review))
  };
};

//store.dispatch

export default connect(
  mapStateToPros,
  mapDispatchToProps
)(MakeReview);

//dispatch is a function of the Redux store
// to dispatch an action.This is the only way to trigger a state change.
//mapDispatchToProps lets you create functions that dispatch when called, and pass those functions as props to your component.
