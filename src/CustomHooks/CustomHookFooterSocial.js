import { useQuery } from "@tanstack/react-query";
import axios from "axios";

        
const CustomHookFooterSocial = () => {
    let{isloading,isError,error,data}=useQuery({
        queryKey:['Footer'],
        queryFn:async()=>{
           try {
            let res=await axios.get('https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/FooterSocial');
            return res.data;
           } catch (error) {
            console.log(error.message);
           }
        }
    })
    
    return {isloading,isError,error,data};
};
export default CustomHookFooterSocial;