import medbotlogo from "../../assets/medbotlogo.png";
import "./resultdisplay.css";

export default function ResultDisplay({ result }) {
  return (
    <section className="result-display">
      <img src={medbotlogo} alt="medchecks logo" />
      <p className="result-content">
        {result}
      </p>
    </section>
  );
}
