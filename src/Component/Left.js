import React, { Component } from "react";
import UserLeft from "./UserLeft";
import TitleLeft from "./TitleLeft";
import io from "socket.io-client";

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userOnline: [],
    };
    this._isMounted = false;
    // this.handle = this.handle.bind(this);
    this.socket = null;
  }
  componentDidMount() {
    this._isMounted = true;
    this.socket = io("localhost:4000");
    this.socket.on("serverSendUseronline", (data) => {
      console.log(data);
      if (this._isMounted) {
        this.handle(data);
      }
      // this._isMounted && this.handle(data.data); //k chay vao ham nay duoc ???
    });
    // console.log(this.state.userOnline);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  handle = (m) => {
    console.log(m);
    // const userOn = this.state.userOnline;
    // userOn.push(m);
    // this.setState(userOn);
    this.setState({ userOnline: m });
    console.log(this.state.userOnline);
  };

  render() {
    return (
      <div className="col-lg-3" style={{ borderBlockStartColor: "blue" }}>
        <div className="card" style={{ borderBlockStartColor: "#7f7fd5" }}>
          <TitleLeft></TitleLeft>
          {this.state.userOnline.map((item, index) => (
            <UserLeft key={index} list={item}></UserLeft>
          ))}
          {/* <UserLeft></UserLeft> */}
        </div>
      </div>
    );
  }
}

export default Left;
