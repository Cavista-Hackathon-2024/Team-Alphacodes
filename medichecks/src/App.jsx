import "./App.css";
import InputForm from "./components/InputForm/InputForm";
import medbotlogo from "./assets/medbotlogo.png";
import ResultDisplay from "./components/ResultDisplay/ResultDisplay";
import RunAiQuery from "./Ai integration/AiResponse";
import { useEffect, useState } from "react";

function App() {
  const [response, setResponse] = useState("");
  const [AiJsonInfo, setAiJsonInfo] = useState("")
  const [errMsg, setErrMsg] = useState("")


  const getDrugData = async (drug) => {
    try {
      const response = await fetch(
        `https://api.fda.gov/drug/drugsfda.json?search=${drug}`
      );

      const data = await response.json();
      const productData = data.results[0].products[0];

      const drugInfo = {
        productNumber: productData.product_number,
        reference_drug: productData.reference_drug,
        brand_name: productData.brand_name,
        active_ingredients: productData.active_ingredients,
        reference_standard: productData.reference_standard,
        dosage_form: productData.dosage_form,
        marketing_status: productData.marketing_status,
      };

      // console.log(drugInfo)

      setAiJsonInfo(JSON.stringify(drugInfo))

    } catch (error) {
      console.error("Error:", error.message);
      setErrMsg(error.message)
    }
  };



  const callAiFunction = async (drug) => {
    console.log(AiJsonInfo)

    const AiResponse = await RunAiQuery(AiJsonInfo, drug);

    console.log(AiResponse);
    

    if (AiResponse) {
      setResponse(AiResponse);
    } else {
      setResponse("An error has occured, please try again");
    }
  };

  const finalResult = response



  return (
    <div className="App">
      <header>
        <img src={medbotlogo} alt="medcheck logo" />
        <h1>Welcome to Medichecks</h1>
      </header>
      <InputForm getDrugData={getDrugData} getAiResponse = {callAiFunction} />
      <ResultDisplay result={finalResult} drugInformation={AiJsonInfo} />
    </div>
  );
}

export default App;
