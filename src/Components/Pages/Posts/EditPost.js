import { useParams } from "react-router-dom";
import UpdatePost from "./UpdatePost";
import { useEffect, useState } from "react";
import axios from "axios";

const EditPost = () => {
    const {id}=useParams();
    const [post,setPost]=useState(null);
    const fetchPost=async()=>{
        try {
            let res=await axios.get(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Posts/${id}`,{
			
		},{
			headers:{
				"Content-Type":"application/json, charset:UTF-8"
			}
		});
        
         setPost(res.data);
        } catch (error) {
            console.log(error.message);
        }
        
    }

    useEffect(()=>{
        fetchPost();
    },[])


    return (
        post&&<UpdatePost post={post}/>
    );
};
export default EditPost;