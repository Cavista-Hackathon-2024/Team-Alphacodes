import axios from 'axios'
import{ useState } from "react";

<<<<<<< HEAD
export default function Scanner() {
  const [previewImage, setPreviewImage] = useState("");
  const [imageFile, setImageFile] = useState({});
  const [text, setText] = useState("");
  function handleFileChange(event) {
    setImageFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  }
  async function handleSubmit(event) {
    event.preventDefault(); 
    const form = new FormData();
    form.append('srcImg',imageFile );
    form.append('Session', 'string');

    const options = {
      method: 'POST',
      url: 'https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/',
      headers: {
        'content-type': 'multipart/form-data',
        'X-RapidAPI-Key': '95e10d7391mshc3a52e2b1574345p10bc13jsn15f2cae9d0d4',
        'X-RapidAPI-Host': 'pen-to-print-handwriting-ocr.p.rapidapi.com',
      },
      data: form, 
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }

  }
  return (
    <div>placeholder</div>
=======
export default function Scanner({imagePath}) {
  return (
    <section className="take-picture">
        <img className="img-display" src={imagePath} alt="your image" />
    </section>
>>>>>>> de7b359cf1e515afc7d7612102dac16f048c96cc
  )
}
