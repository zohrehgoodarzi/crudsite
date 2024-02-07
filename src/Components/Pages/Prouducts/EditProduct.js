import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateProduct from "./UpdateProduct";
import "../Prouducts/ProductsCss/EditFormProuduct.css";
        
const EditProduct = () => {
    const {id}=useParams();
    const [product,setProduct]=useState(null);
    const fetchProduct=async()=>{
        try {
            let res=await axios.get(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Products/${id}`,{
			
		},{
			headers:{
				"Content-Type":"application/json, charset:UTF-8"
			}
		});
        
         setProduct(res.data)
        } catch (error) {
            console.log(error.message);
        }
        
    }

    useEffect(()=>{
        fetchProduct();
    },[])


    return (
        product&&<UpdateProduct product={product}/>
    );
};
export default EditProduct;