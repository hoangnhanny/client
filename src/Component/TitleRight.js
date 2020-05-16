import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import io from "socket.io-client";

class TitleRight extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.handleOut = this.handleOut.bind(this);
    // this.handleRedirect = this.handleRedirect.bind(this);
    this.socket = null;
  }
  componentDidMount() {
    this._isMounted = true;
    this.socket = io("localhost:4000");
  }
  handleOut = () => {
    this.props.history.push("/");
    this.socket.emit("logout", this.props.sendcurentUser);
  };
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className="card-header" style={{ backgroundColor: "#2f56f5", color: "white" }}>
        <span className="logout">
          <h4 className="card-title">Chat với người lạ</h4>
          <p style={{ fontWeight: "bold" }}>Xin chao:{this.props.sendcurentUser}</p>
          <button type="button" className="btn btn-primary" onClick={() => this.handleOut()}>
            Thoát
          </button>
        </span>
      </div>
    );
  }
}

export default withRouter(TitleRight);
