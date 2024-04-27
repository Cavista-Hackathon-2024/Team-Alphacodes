import submitIcon from "../../assets/uploadimage.png";
import searchIcon from "../../assets/searchIcon.png";
import Scanner from "../Scanner/Scanner";
import { useState, useEffect } from "react";
import axios from "axios";

export default function InputForm() {
  const [file, setFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState();
  const [text, setText] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile);
  };

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    console.log(value);
  }

  const getDrugData = async () => {
    try {
        const response = await fetch(`https://api.fda.gov/drug/drugsfda.json?search=${searchTerm}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const productData =  data.results[0].products[0]

        const drugInfo = {
            productNumber: productData.product_number,
            reference_drug: productData.reference_drug,
            brand_name: productData.brand_name,
            active_ingredients: productData.active_ingredients,
            reference_standard: productData.reference_standard,
            dosage_form: productData.dosage_form,
            marketing_status: productData.marketing_status
        }

        console.log(drugInfo)
        
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    //const headers = data.getHeaders ? data.getHeaders() : { 'Content-Type': 'multipart/form-data' };
    const data = new FormData();
    data.append('srcImg', file);
    console.log("this is the sec file", file);
    data.append('Session', 'string');

    const options = {
      method: 'POST',
      url: 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/',
      headers: {
        'X-RapidAPI-Key': '95e10d7391mshc3a52e2b1574345p10bc13jsn15f2cae9d0d4',
        'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com',
      },
      data: data
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setText(response.data.value);
      console.log('it text', text); 
    } catch (error) {
      console.error(error);
    }}
  return (
    <>
      <Scanner imagePath={file} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-upload" className="custom-file-upload">
          {file ? "Uploaded!" : "Upload your image here"}
          <input
            id="file-upload"
            type="file"
            name="image"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>
          <button type="submit" className="extract-text">Extract Text</button>
          
        <label htmlFor="search-input" className="custom-file-upload">
          <input
            id="search-input"
            type="text"
            name="search-term"
            placeholder="Search a drug"
            onChange={handleInputChange}
          />
          <img
            src={searchIcon}
            alt="enter-search"
            className="submit-icon search-btn"
            onClick={getDrugData}
          />
        </label>
      </form>
      <div>The drug you are lookig for {text}</div>
    </>
  );
}
