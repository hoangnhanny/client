import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Chat from "./Chat";
import Login from "./Login";
import Signup from "./Signup";
import io from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      user: [],
      userOnline: [],
    };
  }
  componentDidMount() {
    // this._isMounted = true;
    this.socket = io("localhost:4000");
  }
  onlogin = (m) => {
    // console.log(m);
    // const users = this.state.user;
    // users.push({ m });
    this.setState({ user: m });
    // console.log(this.state.user);
  };
  // onsignup = (m) => {
  //   console.log(m);
  // };

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => <Login {...props} sendName={(m) => this.onlogin(m)} />}
            ></Route>
            {/* <Route
              exact
              path={"/login"}
              render={(props) => <Login {...props} sendName={(m) => this.onlogin(m)} />}
            ></Route> */}
            <Route exact path={"/signup"} render={(props) => <Signup {...props} />}></Route>
            <Route
              exact
              path={"/chat"}
              render={(props) => <Chat {...props} sendUser={this.state.user} />}
            ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
