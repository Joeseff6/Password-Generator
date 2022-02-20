import React from "react";
import "./OutputContainer.css";

class OutputContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h4 className="d-flex align-items-center justify-content-center mb-5" id="output-header">
            Generated Passwords
          </h4>
          {this.props.generatedPasswords.map((password) => {
            return (
              <div className="row justify-content-center my-2" key={password}>
                <div className="generated-password-block col-md-6 text-center">
                  {password}
                </div>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default OutputContainer;
