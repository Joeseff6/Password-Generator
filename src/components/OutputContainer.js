import React from "react";
import "./OutputContainer.css";

class OutputContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h4 className="text-center" id="output-header">
            Generated Passwords
          </h4>
        </div>
        <div className="row">
        </div>
      </React.Fragment>
    );
  }
}

export default OutputContainer;
