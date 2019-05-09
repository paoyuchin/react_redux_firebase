import React, { Component } from "react";
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
class CreateProject extends Component {
    state = {
        title: "",
        content : "",
    };
    handleSubmit = e => {
        e.preventDefault();
        this.props.createProject(this.state)
    };
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>create my project</h5>
                    <label htmlFor="title">title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                    <label htmlFor="content">project content</label>
                    <textarea id="content" onChange={this.handleChange}></textarea>
                    <div>
                        <button>submit</button>
                    </div>
                </form>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

//store.dispatch

export default connect(null, mapDispatchToProps)(CreateProject);


//dispatch is a function of the Redux store
// to dispatch an action.This is the only way to trigger a state change.
//mapDispatchToProps lets you create functions that dispatch when called, and pass those functions as props to your component.