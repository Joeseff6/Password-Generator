import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-center">Password Generator</h1>
      </header>
      <div className="row justify-content-center">
        <div className="col-md-5" id="input-container">
          <InputContainer />
        </div>
        <div className="col-md-5" id="output-container">
          <OutputContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
