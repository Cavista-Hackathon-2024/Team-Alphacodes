import "./App.css";
import Scanner from "./components/Scanner/Scanner";
import medbotlogo from "./assets/medbotlogo.png";
import submitIcon from "./assets/uploadimage.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={medbotlogo} alt="medcheck logo" />
        <h1>Welcome to Medichecks</h1>
      </header>

      <Scanner />

      <form enctype="multipart/form-data" method="post">
        <label for="file-upload" class="custom-file-upload">
          <i class="fa fa-cloud-upload"></i> Upload your image here
          <input id="file-upload" type="file" name="image" accept="image/*" />
          <img src={submitIcon} alt="submit" id="submit-icon" />
          
        </label>
      </form>
      
    </div>
  );
}

export default App;
