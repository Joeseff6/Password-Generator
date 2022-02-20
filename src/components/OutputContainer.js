import React from "react";
import "./OutputContainer.css";

class OutputContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h4 className="d-flex align-items-center justify-content-center mb-3" id="output-header">
            Generated Passwords
          </h4>
          {this.props.generatedPasswords.length ? <h5 className="text-center" style={{ color: "white"}}>Click on a password to copy it</h5> : null};
          {this.props.generatedPasswords.map((password) => {
            return (
              <div className="row justify-content-center my-2" key={password}>
                <button className="generated-password-block col-md-6 text-center" onClick={(e) => navigator.clipboard.writeText(e.target.innerText)}>
                  {password}
                </button>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

export default OutputContainer;
