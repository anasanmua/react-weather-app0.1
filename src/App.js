import "./App.css";
import Weather from "./Weather.js";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
    </div>
  );
}

export default App;
