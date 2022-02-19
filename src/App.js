import "./App.css";
import InputContainer from "./components/InputContainer";
import OutputContainer from "./components/OutputContainer";

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="text-center">Password Generator</h1>
        <InputContainer />
        <OutputContainer />
      </header>
    </div>
  );
}

export default App;
