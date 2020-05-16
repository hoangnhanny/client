import React, { Component } from "react";

class Mess extends Component {
  render() {
    return (
      <div className="container">
        {/* <div className="card-text">
          <p className="float-left">{this.props.user}</p>

          <span className="float-left">{this.props.user}:</span>
          <p className="float-left">{this.props.me}</p>
        </div> */}
        <div className="row">
          <div className="col-2 m-4" style={{ backgroundColor: "#white", textAlign: "center" }}>
            <p className="Usersend" style={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}>
              {this.props.user}{" "}
            </p>
          </div>

          <div className="col-8 m-1 text-center" style={{ textAlign: "left", color: "white" }}>
            {this.props.me}
          </div>
        </div>
      </div>
    );
  }
}

export default Mess;
