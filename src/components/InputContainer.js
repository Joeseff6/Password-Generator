import React from "react";
import options from "../helper/options";
import generatePassword from "../helper/generatePassword";
import "./InputContainer.css";

class InputContainer extends React.Component {
  state = {
    charLength: 8,
    lowercase: true,
    uppercase: false,
    symbols: false,
    numbers: false,
    numOfPasswords: 1,
    display: "d-none",
  };

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

  onFormSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(this.state).includes(true)) {
      this.setState({ display: "" })
      return;
    } else {
      this.setState({ display: "d-none" })
    }
    const generatedPassword = generatePassword(this.state);
    this.props.onPasswordGeneration(generatedPassword);
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <h4 className="d-flex align-items-center justify-content-center" id="options-header">
            Select your options
          </h4>
        </div>
        <div className="row">
          <form onSubmit={this.onFormSubmit}>
            <label htmlFor="passwordLength" className="mt-3">Password Character Length:</label>
            <select
              name="passwordLength"
              id="passwordLength"
              onChange={(e) =>
                this.setState({ charLength: parseInt(e.target.value) })
              }
            >
              {this.mapCharLengthOptions()}
            </select>
            <div className="form-check form-switch my-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="lowercase"
                value={this.state.lowercase}
                checked={this.state.lowercase}
                onChange={() =>
                  this.setState({ lowercase: !this.state.lowercase })
                }
              />
              <label className="form-check-label" htmlFor="lowercase">
                Lowercase Characters [a-z]
              </label>
            </div>
            <div className="form-check form-switch my-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="uppercase"
                onChange={() =>
                  this.setState({ uppercase: !this.state.uppercase })
                }
              />
              <label className="form-check-label" htmlFor="uppercase">
                Uppercase Characters [A-Z]
              </label>
            </div>
            <div className="form-check form-switch my-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="symbols"
                onChange={() => this.setState({ symbols: !this.state.symbols })}
              />
              <label className="form-check-label" htmlFor="symbols">
                Symbols {'[~`!@#$%^&*()_-+={[}]|:;<,>.?/"]'}
              </label>
            </div>
            <div className="form-check form-switch my-3">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="numbers"
                onChange={() => this.setState({ numbers: !this.state.numbers })}
              />
              <label className="form-check-label" htmlFor="numbers">
                Numbers [0-9]
              </label>
            </div>
            <label htmlFor="numOfPasswords">Number of Passwords: </label>
            <select
              name="numOfPasswords"
              id="numOfPasswords"
              onChange={(e) =>
                this.setState({ numOfPasswords: parseInt(e.target.value) })
              }
            >
              {this.mapNumOfPasswords()}
            </select>
            <div className={`error-message text-center mt-3 ${this.state.display}`}>
              You must select at least one option.
            </div>
            <button className="btn btn-primary d-block m-auto my-4" type="submit">
              Generate
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default InputContainer;
