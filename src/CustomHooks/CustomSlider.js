import { useQuery } from "@tanstack/react-query";
import axios from "axios";     
const CustomSlider = () => {
    const {isLoading,isError,error,data}=useQuery({
        queryKey:['Slider'],
        queryFn:async()=>{
            try {
                let res=await axios.get('https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/images');
                return res.data;
            } catch (error) {
                console.log(error.message);
            }
        }
    })
    return {isLoading,isError,error,data};
        
   
};
export default CustomSlider;