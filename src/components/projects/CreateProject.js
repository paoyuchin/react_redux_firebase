import React, { Component } from "react";
class CreateProject extends Component {
    state = {
        title: "",
        content : ""
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>create my project</h5>
                    <label htmlFor="title">title</label>
                    <input type="text" id="title" onChange={this.handleChange} />
                    <label htmlFor="content" onChange={this.handleChange}>project content</label>
                    <textarea id="content"></textarea>
                    <div>
                        <button>submit</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default CreateProject;
