import React, { Component } from "react";

class EditPopup extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.character };
    this.changed = {
      name: false,
      job: false,
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
    this.changed[name] = true;
  };

  handleConfirm = () => {
    // console.log("handleConfirm called", this.state, this.props.index);
    this.props.handleEditPopup(false, this.state, this.props.index);
  };

  handleCancel = () => {
    this.props.handleEditPopup(false, this.props.character);
  };

  render() {
    const { character } = this.props;
    const { name, job } = this.state;
    const noFieldEmpty = Object.values(this.state).every((element) =>
      element.trim()
    );
    const anyFieldChanged = Object.values(this.state).some(
      (element) => !Object.values(character).includes(element.trim())
    );
    // console.log("render called", this.changed, {
    //   noFieldEmpty,
    //   anyFieldChanged,
    // });
    return (
      <div className="popup" id="edit-popup">
        <div className={"popup-content"}>
          <form>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={
                name.trim()
                  ? name.trim() !== character.name
                    ? this.changed.name
                      ? name.trim()
                        ? "is-success"
                        : "has-error"
                      : ""
                    : ""
                  : "has-error"
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
                job.trim()
                  ? job.trim() !== character.job
                    ? this.changed.job
                      ? job.trim()
                        ? "is-success"
                        : "has-error"
                      : ""
                    : ""
                  : "has-error"
              }
              value={job}
              onChange={this.handleChange}
            />
            <input
              type="button"
              value="Confirm"
              disabled={noFieldEmpty && anyFieldChanged ? false : true}
              onClick={this.handleConfirm}
            />
            <input type="button" value="Cancel" onClick={this.handleCancel} />
          </form>
        </div>
      </div>
    );
  }
}

export default EditPopup;
