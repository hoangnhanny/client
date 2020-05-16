import React, { Component } from "react";

class ErrLogin extends Component {
  render() {
    return (
      <div
        className="alert alert-danger alert-dismissible fade show"
        style={{ textAlign: "center" }}
      >
        <strong>Cảnh báo!</strong> Sai tên đăng nhập hoặc mật khẩu
      </div>
    );
  }
}

export default ErrLogin;
