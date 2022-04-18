import React, {useState} from 'react';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_PORTFOLIO_URL;


function UploadImage() {
// const [description, setDescription] = useState("");
const [image, setImage] = useState({});

const handleImage = (e) => {
  // console.log(e);
 setImage(e.target.file[0]) ;
  // const {type} = selectedFile;if (type !== "image/png" && type !=="image/jpg" && type !== "image/jpeg")
// {
//   alert("Sélectionner une image .png, .jpg ou .jpeg")
// }
// else{
//   setFile(selectedFile);
// }
}

const sendFile = () => {
  const newImage = new FormData();
  newImage.append("File", image);
  axios
  .post(`${API_URL}/api/image`, newImage)
  .then(() => {
    console.log("OK");
  }).catch((err) => {
    console.log(err)
  })
}

  return (
  <section>
    <form>
      <div>UploadImage</div>
      {/* <label htmlFor="description">
        Description :{" "}
        <input type="text" name="descritption" id="descritption" />
      </label> */}
      <label htmlFor="image">
        Image : <input type="file" accept="image/*" onChange={(e)=>(handleImage(e))} />
      </label>
    </form>
    </section>
  );
}

export default UploadImage;
