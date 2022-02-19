import React from "react";
import options from "../helper/options";
import "./InputContainer.css";

class InputContainer extends React.Component {
  mapCharLengthOptions() {
    return options.charLength.map((value) => {
      return (
        <option value={value} key={value}>
          {value}
        </option>
      );
    });
  }

  mapNumOfPasswords() {
    return options.numOfPasswords.map((value) => {
      return (
        <option value={value} key={value}>
          {value}
        </option>
      );
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h4 className="text-center" id="options-header">
            Select your options
          </h4>
        </div>
        <div className="row">
          <form>
            <label htmlFor="passwordLength">Password Character Length: </label>
            <select name="passwordLength" id="passwordLength">
              {this.mapCharLengthOptions()}
            </select>
            <div className="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="lowercase"
              />
              <label className="form-check-label" htmlFor="lowercase">
                Lowercase Characters [a-z]
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="uppercase"
              />
              <label className="form-check-label" htmlFor="uppercase">
              Uppercase Characters [A-Z]
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="symbols"
              />
              <label className="form-check-label" htmlFor="symbols">
              Symbols [!@#$%^&*()]
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="numbers"
              />
              <label className="form-check-label" htmlFor="numbers">
              Numbers [0-9]
              </label>
            </div>
            <div className="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="unique"
              />
              <label className="form-check-label" htmlFor="unique">
              Unique Values [No Duplicates]
              </label>
            </div>
            <label htmlFor="numOfPasswords">Number of Passwords: </label>
            <select name="numOfPasswords" id="numOfPasswords">
              {this.mapNumOfPasswords()}
            </select>
            <button className="btn btn-primary d-block m-auto">Submit</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default InputContainer;
