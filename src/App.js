import "./App.css";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-center">Password Generator</h1>
      </header>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <InputContainer />
        </div>
        <div className="col-md-4">
          <OutputContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
