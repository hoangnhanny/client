import React, { Component } from "react";

class TitleLeft extends Component {
  render() {
    return (
      <div
        className="card-header"
        style={{
          border: "1px solid",
          textAlign: "center",
          backgroundColor: "#2f56f5",
          color: "white",
        }}
      >
        <h4 className="card-title">Người Online</h4>
      </div>
    );
  }
}

export default TitleLeft;
