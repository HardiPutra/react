import "./App.css";
import Belajarsatu from "./components/belajarsatu";
import Square from "./components/tictactoe";
import Tictactoe from "./components/tictactoe";

function App() {
  return (
    <div className="App">
      <div className="latihansatu">
        <Belajarsatu />
      </div>
      <div className="latihandua">
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}

export default App;
