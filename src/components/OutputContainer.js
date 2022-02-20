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
        <div className="row justify-content-center">
          {this.props.generatedPasswords.map((password) => {
            return (
              <div
                className="generated-password-block col-md-6 text-center"
                key={password}
              >
                {password}
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default OutputContainer;
