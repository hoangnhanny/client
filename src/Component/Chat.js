import React, { Component } from "react";
import Left from "./Left";
import Right from "./Right";
// import axios from "axios";
class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMess: [],
    };
  }
  componentWillMount() {}
  render() {
    return (
      <div className="container">
        <div className="row">
          <Left></Left>
          <Right sendUser={this.props.sendUser} list={this.state.listMess}></Right>
        </div>
      </div>
    );
  }
}

export default Chat;
