import React, { Component } from "react";

class ErrSignup extends Component {
  render() {
    return (
      <div
        className="alert alert-warning alert-dismissible fade show"
        style={{ textAlign: "center" }}
      >
        <strong>Thông báo!</strong> Tên đăng nhập hoặc email bị trùng. Mời bạn đổi tên khác
      </div>
    );
  }
}

export default ErrSignup;
