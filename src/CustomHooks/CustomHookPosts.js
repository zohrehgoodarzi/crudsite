import { useQuery } from "@tanstack/react-query";
import axios from "axios";

        
const CustomHookPosts = () => {
    const {isLoading,isError,error,data}=useQuery({
        queryKey:['Posts'],
        queryFn:async()=>{
            try {
                let res=await axios.get("https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Posts");
                return res.data;
            } catch (error) {
                console.log( error.message);
            }
        }
    })
    return {isLoading,isError,error,data};
        
    
};
export default CustomHookPosts;