import { useState } from "react";
import Progress from "./Progress";
import axios from "axios";
import "./ImageUpload";
import ImageUpload from "./ImageUpload";
const CreateProduct = () => {
const [imagetitle,setImagetitle]=useState("uploadImage");
const [file,setFile]=useState([]);
const changeFile=(e)=>{
    setFile(e.target.files[0]);
    setImagetitle(e.target.files[0].name);
}
const eventHandler=(e)=>{
    e.preventDefault();
    const formData=new formData();
    formData.append("url",file);
    const create=async()=>{
       try {
        let res=await axios.post('https://my-json-server.typicode.com/zohrehgoodarzi/dbjson',formData,{
            headers:{
                "Content-Type":"multipart/formData"
            }
        })
       } catch (error) {
        console.log(error.message);
       }
    }
    create();
}


  return (
    <div className="container p-5 mt-5 bg-dark text-white">
      <form action="#" onSubmit={(e) => eventHandler(e)}>
        <label htmlFor="image" className="mb-2 text-capitalize">
          {imagetitle}
        </label>
        <input
          type="file"
          id="url"
          name="url"
          className="form-control"
          onChange={(e) => changeFile(e)}
        />
        {/* progress*/ }
        <Progress/>

        {/* progress*/ }
        <div className="d-block">
          <input type="submit" className="btn btn-success text-capitalize" value="upload" />
        </div>
      </form>
      <ImageUpload/>
    </div>
  );
};
export default CreateProduct;
