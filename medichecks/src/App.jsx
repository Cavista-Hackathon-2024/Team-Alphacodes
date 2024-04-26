import "./App.css";
import Scanner from "./components/Scanner/Scanner";
import medbotlogo from "./assets/medbotlogo.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={medbotlogo} alt="medcheck logo" />
        <h1>Welcome to Medichecks</h1>
      </header>

      <Scanner />

      
    </div>
  );
}

export default App;
