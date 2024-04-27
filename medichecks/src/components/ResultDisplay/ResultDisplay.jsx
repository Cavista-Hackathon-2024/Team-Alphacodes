import medbotlogo from "../../assets/medbotlogo.png";
import "./resultdisplay.css";

export default function ResultDisplay({ result, drugInformation, isLoading }) {
  const dataObject = drugInformation;
  
  const DisplayResult = () => {
    return (
      <div>
        <div dangerouslySetInnerHTML={{ __html: result }}></div>
      </div>
    );
  };

  return (
    <section className="result-display">
      <img src={medbotlogo} alt="medchecks logo" />
      <div className="result-content">
        <div>
          {DisplayResult()}
        </div>
      </div>
    </section>
  );
}
