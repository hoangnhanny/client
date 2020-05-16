import React, { Component } from "react";
import InputRight from "./InputRight";
import TitleRight from "./TitleRight";
import TextRight from "./TextRight";
import io from "socket.io-client";
import axios from "axios";
class Right extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      user: {},
      userOnline: [],
    };
    this.socket = null;
    this.sendNewMess = this.sendNewMess.bind(this);
    this.newMessage = this.newMessage.bind(this);
    // this.handlelistMess = this.handlelistMess.bind(this);
  }
  componentDidMount() {
    this._isMounted = true;
    this.socket = io("localhost:4000");
    this.socket.on("serverSendMessage", (data) => {
      this.newMessage(data);
    });
    axios
      .get("http://localhost:4000/readMess")
      .then((response) => {
        console.log(response.data.result);
        // this.handleListMess(response.data.result);
        const messages = this.state.message;
        // const messages = this.state.message;
        response.data.result.map((item) => {
          messages.push({
            m: item.message,
            userName: item.usersend,
          });
          this.setState({ messages });
          // console.log(this.state.messages);
        });

        // this.setState({ listmess: response.data.result });
        // console.log(this.state.listmess);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // handlelistMess = () => {
  //   console.log(this.props);
  // };
  newMessage = (m) => {
    console.log(m);
    const messages = this.state.message;
    messages.push({
      m: m.data,
      userName: m.user,
    });
    this.setState({ messages });
    console.log(this.state.message);
  };
  sendNewMess = (m) => {
    this.socket.emit("newMessage", { data: m, user: this.props.sendUser });
  };

  render() {
    return (
      <div className="col-lg-8">
        <TitleRight sendcurentUser={this.props.sendUser}></TitleRight>
        <TextRight
          sendUser={this.state.sendUser}
          mess={this.state.message}
          // list={this.props.list}
        ></TextRight>
        <InputRight
          sendMess={(m) => this.sendNewMess(m)}
          sendcurentUser={this.props.sendUser}
        ></InputRight>
      </div>
    );
  }
}

export default Right;
