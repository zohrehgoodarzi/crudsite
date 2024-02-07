import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";

const CustomHookShowProduct = () => {
  const {id} = useParams();
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["Prodid"],
    queryFn: async () => {
      try {
        let res = await axios.get(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Products/${id}`);
        return res.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return { isLoading, isError, error, data };
};
export default CustomHookShowProduct;
