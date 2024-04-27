import searchIcon from "../../assets/searchIcon.png";
import Scanner from "../Scanner/Scanner";
import { useState } from "react";


export default function InputForm({ getDrugData, getAiResponse}) {
  const [file, setFile] = useState(null);
  const [searchTerm, setSearchTerm] = useState();

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    setFile(selectedFile);
  };

  const handleInputChange = (event) => {
    const value = event.target.value
    setSearchTerm(value)
    console.log(value);
  }

  return (
    <>
      <Scanner imagePath={file} />
      <p className="extracted-text"></p>
      <form encType="multipart/form-data" method="post">
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
          <button className="extract-text" >extract text</button>
          
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
            onClick={async () => {
                try{
                    await getDrugData(searchTerm)
                    await getAiResponse(searchTerm)
                }catch(error){
                    console.error("Error:", error)
                }
            }}
          />
        </label>
      </form>
    </>
  );
}
