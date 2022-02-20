import React from "react";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";
import "./App.css";

class App extends React.Component {
  state = { generatedPasswords: [] };

  onPasswordGeneration = (generatedPasswords) => {
    this.setState({ generatedPasswords: generatedPasswords })
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="text-center">Password Generator</h1>
        </header>
        <div className="row justify-content-center" id="app-container">
          <div className="col-md-5" id="input-container">
            <InputContainer onPasswordGeneration={this.onPasswordGeneration} />
          </div>
          <div className="col-md-5" id="output-container">
            <OutputContainer generatedPasswords={this.state.generatedPasswords} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
