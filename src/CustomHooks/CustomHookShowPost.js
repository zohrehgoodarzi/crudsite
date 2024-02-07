import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const CustomHookShowPost = () => {
    const {id} = useParams();
    const { isLoading, isError, error, data } = useQuery({
      queryKey: ["Postid"],
      queryFn: async () => {
        try {
          let res = await axios.get(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Posts/${id}`);
          return res.data;
        } catch (error) {
          console.log(error.message);
        }
      },
    });
    return { isLoading, isError, error, data };
  };
  export default CustomHookShowPost;
  