import axios from 'axios'
import{ useState } from "react";

export default function Scanner() {
  const [previewImage, setPreviewImage] = useState("");
  const [imageFile, setImageFile] = useState({});
  const [text, setText] = useState("");
  function handleFileChange(event) {
    setImageFile(event.target.files[0]);
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
  }
  return (
 
    <section className="take-picture">
        <button className="scan-btn">scan image</button>
    </section>
  )
}
