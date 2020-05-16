import React, { Component } from "react";

class UserLeft extends Component {
  render() {
    return (
      <div className="card-body2">
        <p className="useronline" style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}>
          {this.props.list}
        </p>
      </div>
    );
  }
}

export default UserLeft;
