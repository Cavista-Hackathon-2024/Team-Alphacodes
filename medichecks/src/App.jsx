import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import medbotlogo from "./assets/medbotlogo.png";


function App() {
  return (
    <div className="App">
      <header>
        <img src={medbotlogo} alt="medcheck logo" />
        <h1>Welcome to Medichecks</h1>
      </header>

      <InputForm />
      
    </div>
  );
}

export default App;
