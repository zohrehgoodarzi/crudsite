import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../Prouducts/ProductsCss/UpdateButton.css";

const UpdateProduct = ({ product }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice]=useState("");
  const navigate = useNavigate();

  const UpdateForm = () => {
    const UpdateProductt = async () => {
      try {
        let res = await axios.put(
          `https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Products/${product.id}`,
          {
            ...product,
            title: title,
            description: description,
            price:price
          },
          {
            method: "put",
          }
        );

        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };


    UpdateProductt();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
    });
   navigate("/management");
  };


  


  useEffect(() => {
    setTitle(product.title);
    setDescription(product.description);
    setPrice(product.price);
    
  }, []);
  return (
    <div className="shade">
      <div className="blackboard">
        <div className="form">
          <p>
            <label>title: </label>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            {title.length === 0 ? (
              <span className="text-danger">
                this field required</span>
            ) : (
              ""
            )}
          </p>
          <p>
            <label>description: </label>
            <textarea
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            {description.length < 5 && description.length <= 5 ? (
              <span className="text-danger">this field required... </span>
            ) : (
              ""
            )}
          </p>
          <p>
            <label>Price: </label>
            <input
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            {price.length === 0 ? (
              <span className="text-danger">
                this field required</span>
            ) : (
              ""
            )}
          </p>
           <button className="buttonupdate" onClick={UpdateForm} type="submit">
            Update
          </button>
        </div>
      </div>
    </div>
  );
};
export default UpdateProduct;
