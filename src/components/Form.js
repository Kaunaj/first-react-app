import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };
  state = this.initialState;
  changed = {
    name: false,
    job: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.changed[name] = true;
  };

  handleSubmit = () => {
    // console.log("handleSubmit called");
    this.props.addCharacter(this.state);
    // re-initialize variables
    this.setState(this.initialState);
    this.changed = { name: false, job: false };
  };

  render() {
    const { name, job } = this.state;
    const noFieldEmpty = Object.values(this.state).every((element) =>
      element.trim()
    );
    // console.log("render called", noFieldEmpty, this.changed.name);
    return (
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className={
            this.changed.name ? (name.trim() ? "is-success" : "has-error") : ""
          }
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          name="job"
          id="job"
          className={
            this.changed.job ? (job.trim() ? "is-success" : "has-error") : ""
          }
          value={job}
          onChange={this.handleChange}
        />
        <input
          type="button"
          value="Add"
          disabled={noFieldEmpty ? false : true}
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}

export default Form;
