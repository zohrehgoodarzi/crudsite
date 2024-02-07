import { useQuery } from "@tanstack/react-query";
import axios from "axios";
      
const CustomHookProducts = () => {
    
    const {isLoading,isError,error,data}=useQuery({
        queryKey:['Products'],
        queryFn:async()=>{
            try {
                let res=await axios.get('https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Products');
                return res.data;
            } catch (error) {
                console.log(error.message);
            }
        }
    })
    return {isLoading,isError,error,data};
  
   
};
export default CustomHookProducts;