import React, { Component } from "react";
import axios from "axios";

class InputRight extends Component {
  constructor(props) {
    super(props);

    this.textMess = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  handleSubmit(event) {
    console.log(event);
    // console.log(this.textMess.current.value);
    this.props.sendMess(this.textMess.current.value);
    axios({
      method: "post",
      url: "http://localhost:4000/saveMess",
      data: {
        usersend: this.props.sendcurentUser,
        message: this.textMess.current.value,
      },
    });
    event.preventDefault();
    this.textMess.current.value = "";
  }
  // handleEnter = (e) => {
  //   console.log(e);
  //   if (e.keyCode === 13) {
  //     this.handleSubmit(e);
  //   }
  // };
  keyPressed(event) {
    if (event.key === "Enter") {
      this.handleSubmit(event);
    }
  }
  render() {
    return (
      <div className="card-footer">
        {/* <div className="input-group mb-3">
          <input
            type="text"
            ref={this.textMess}
            id="mainInput"
            className="form-control"
            placeholder="Search"
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="submit"
              onClick={(event) => this.handleSubmit(event)}
            >
              Send
            </button>
          </div>
        </div> */}
        <div className="input-group">
          <input
            ref={this.textMess}
            type="text"
            name="name"
            id="mainInput"
            className="form-control"
            placeholder="Nhập tin nhắn"
            // onKeyUp={this.handleEnter}
            onKeyPress={this.keyPressed}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(event) => this.handleSubmit(event)}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default InputRight;
