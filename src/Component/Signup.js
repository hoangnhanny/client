import React, { Component } from "react";
import axios from "axios";
import io from "socket.io-client";
import {
  Link,
  // Redirect,
  // useLocation,
} from "react-router-dom";
import ErrSignup from "./ErrSignup";
class Signup extends Component {
  constructor(props) {
    super(props);
    this._isMounted = false;
    this.state = {
      username: "",
      address: "",
      email: "",
      password: "",
      errSignup: false,
    };
    this.handleErroSignup = this.handleErroSignup.bind(this);
    this.socket = null;
    // this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }
  componentDidMount() {
    this._isMounted = true;
    this.socket = io("localhost:4000");
    // this.socket.on("serverSendUseronline", (data) => {
    //   console.log(data.data);
    //   // this.handle(data.data);
    //   this.handle(data.data); //k chay vao ham nay duoc ???
    // });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  handleUserChange = (event) => {
    this.setState({ username: event.target.value });
  };
  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  handleErroSignup = () => {
    this.setState({ errSignup: true });
    console.log(this.state.errSignup);
  };

  onClickSignUp = (event) => {
    console.log(this.state.username);
    console.log(this.state.address);
    console.log(this.state.email);
    console.log(this.state.password);
    event.preventDefault();
    axios
      .post("http://localhost:4000/signup", {
        username: this.state.username,
        password: this.state.password,
        address: this.state.address,
        email: this.state.email,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.status === 200) {
          this.handleSuccessfulAuth(response.data);
          // console.log(response.data);
        } else {
          this.handleErroSignup();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  handleSuccessfulAuth = (data) => {
    this.props.history.push("/");
    console.log(data.userObj.username);
    // this.props.sendNewName(data.userObj.username);
    // this.socket.emit("loginSuccess", data.userObj.username);
  };
  render() {
    return (
      <div className="container">
        {this.state.errSignup ? <ErrSignup></ErrSignup> : null}
        {/* <ErrSignup></ErrSignup> */}
        <h1 className="text-center" style={{ color: "antiquewhite" }}>
          Chào mừng bạn đến với WebChat !
        </h1>
        <div className="row">
          <div
            className="col-xs-12 col-sm-12 col-md-4 well well-sm col-md-offset-4"
            style={{ margin: "auto" }}
          >
            <legend style={{ color: "blue" }}>
              {/* <a href>
                <i className="glyphicon glyphicon-globe" />
              </a> */}
              Đăng ký thành viên!
            </legend>
            <form action="/signup" method="post" className="was-validated">
              <div className="form-group">
                <input
                  className="form-control"
                  name="username"
                  placeholder="Tên tài khoản"
                  type="text"
                  onChange={this.handleUserChange}
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="address"
                  placeholder="Địa chỉ"
                  type="text"
                  onChange={this.handleAddressChange}
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  type="email"
                  onChange={this.handleEmailChange}
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="password"
                  placeholder="Mật khẩu"
                  type="password"
                  onChange={this.handlePasswordChange}
                  required
                />
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">Please fill out this field.</div>
              </div>
              <br />
              <br />
              <button
                className="btn btn-lg btn-primary btn-block"
                type="submit"
                onClick={(event) => this.onClickSignUp(event)}
              >
                Đăng ký
              </button>
              <small>Đã có tài khoản ?</small>
              <li style={{ fontWeight: "bold", color: "red" }}>
                <Link to="/">Login</Link>
              </li>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
