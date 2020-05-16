import React, { Component } from "react";
import axios from "axios";
import io from "socket.io-client";
import {
  Link,

  // Redirect,
  // useLocation,
} from "react-router-dom";
import ErrLogin from "./ErrLogin";

class Login extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleListMess = this.handleListMess.bind(this);
    // this.handle = this.handle.bind(this);
    this.state = {
      username: "",
      password: "",
      userOnline: [],
      erroLogin: false,
      listmess: [],
      // logged: false,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.socket = null;
    // let history = useHistory();
  }

  componentDidMount() {
    this._isMounted = true;
    this.socket = io("localhost:4000");
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  handleEmailChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleListMess = (data) => {
    this.setState({ listmess: data });
    console.log(this.state.listmess);
  };
  handleSuccessfulAuth = (data) => {
    this.props.history.push("/chat");

    // console.log(data.result[0].username);
    this.props.sendName(data.result[0].username);
    this.socket.emit("loginSuccess", data.result[0].username);
    // const users = this.state.userOnline;
    // const userOnlines = this.state.userOnline;
    // userOnlines.push({ userOnline: data.result[0].username });
    // this.setState({ userOnline: data.result[0].username });
    // console.log(users);
  };

  handleErroLogin = () => {
    this.setState({ erroLogin: true });
    console.log(this.state.erroLogin);
  };

  onClickLogin = (event) => {
    console.log(this.state.username);
    console.log(this.state.password);
    event.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then((response) => {
        // console.log(response.data);

        if (response.data.status === 200) {
          this.handleSuccessfulAuth(response.data);
          // console.log(response.data);
        } else {
          this.handleErroLogin();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="container">
        {this.state.erroLogin ? <ErrLogin></ErrLogin> : null}
        {/* {this.state.logged ? <ErrLogin></ErrLogin> : null} */}
        {/* <ErrLogin ></ErrLogin> */}
        <h1 className="text-center" style={{ color: "aliceblue" }}>
          Đăng nhập để cùng trò chuyện
        </h1>
        <div className="row">
          <div className="col-md-3 col-md-offset-4" style={{ margin: "auto" }}>
            <legend style={{ color: "white" }}>
              {/* <a href>
                <i className="glyphicon glyphicon-globe" />
              </a> */}
              Đăng nhập!
            </legend>
            <div className="login-form" style={{ color: "white" }}>
              <form action="/login" method="post" className="is-valid">
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Tên tài khoản"
                    id="login-name"
                    type="text"
                    name="username"
                    onChange={this.handleEmailChange}
                    required
                  />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Password"
                    id="login-pass"
                    type="password"
                    name="password"
                    onChange={this.handlePasswordChange}
                    required
                  />
                  <div className="valid-feedback">Valid.</div>
                  <div className="invalid-feedback">Please fill out this field.</div>
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                  onClick={(event) => this.onClickLogin(event)}
                >
                  Đăng nhập
                </button>
              </form>
              {/* <div className="checkbox">
                <label>
                  <input type="checkbox" /> Giữ tôi luôn đăng nhập{" "}
                </label>
              </div> */}

              <div>
                <small>Không có tài khoản?</small>
                <li style={{ fontWeight: "bold", color: "red" }}>
                  <Link to="/signup">SignUp</Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
