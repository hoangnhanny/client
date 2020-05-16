import React, { Component } from "react";
import Mess from "./Mess";

class TextRight extends Component {
  render() {
    return (
      // <div className="card-body">
      //   <Mess sendUser={this.props.sendUser} mess={this.props.mess}></Mess>
      // </div>
      <div className="card-body">
        {this.props.mess.map((item, index) => (
          <Mess key={index} me={item.m} user={item.userName}></Mess>
        ))}
      </div>
    );
  }
}

export default TextRight;
