import { useQuery } from "@tanstack/react-query";
import axios from "axios";

        
const CustomHookFooterAcount = () => {
    let{isloading,isError,error,data}=useQuery({
        queryKey:['Footer'],
        queryFn:async()=>{
           try {
            let res=await axios.get('https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/FooterContact');
            return res.data;
           } catch (error) {
            console.log(error.message);
           }
        }
    })
    
    return {isloading,isError,error,data};
};
export default CustomHookFooterAcount;