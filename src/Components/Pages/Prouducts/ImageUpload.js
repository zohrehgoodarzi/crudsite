import axios from "axios";
import { useEffect, useState } from "react";

        
const ImageUpload = () => {
    const [url,setImage]=useState(null);
    const fetchImage=async()=>{
       try {
        const res=await axios.get('http://localhost:3003/Products')
        setImage(res.data);
        console.log(url);
       } catch (error) {
        console.log(error.message);
       }
    }

    useEffect(()=>{
        fetchImage();
    },[])

    return (
        <div className="showImage mt-4">
            <div className="row m-0">
                <div className="col-4">
                    <img src={`http://localhost:3003/Products/${urll}`} alt="" className="img-fluid" />
                </div>
            </div>
             
        </div>
    );
};
export default ImageUpload;