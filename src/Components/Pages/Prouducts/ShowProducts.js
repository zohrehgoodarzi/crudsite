import Skeleton from "react-loading-skeleton";
import CustomHookShowProduct from "../../../CustomHooks/CustomHookShowProduct";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const ShowProducts = () => {
  const naigate = useNavigate();
  const navigate = useNavigate();
  const { id } = useParams();
  let { isLoading, isError, error, data } = CustomHookShowProduct();

  if (isLoading) {
    return <h1>isLoading </h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const backtoProuduct = () => {
    navigate("/prouducts");
  };
  const backtoHome=()=>{
    navigate("/")
  }

  const gotoEditform = () => {
    naigate(`/prouducts/editproduct/${id}`);
  };
  const DeleteProduct=async()=>{
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success mx-2",
          cancelButton: "btn btn-danger mx-2"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          const res=axios.delete(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Products/${id}`,
          {method:"delete"}
          
          
          
          )
             console.log("delete succsee");
             navigate("/prouducts");
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });
    
}





  return (
    data && (
      <div className="card" id="cardshow" align="center">
        <img
          src={require(`../../../media/${data.urll}`)}
          className="card-img-top img-fluid"
          id="showprod"
          alt={data.urll}
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text text-danger fw-bolder">{data.price}</p>
          <p className="card-text">
          <button
              className="btn btn-dark btn-lg mx-2"
              onClick={backtoHome}
            >
              BackToHome
            </button>
            <button
              className="btn btn-dark btn-lg mx-2"
              onClick={backtoProuduct}
            >
              BackToProducts
            </button>
           

            <button className="btn btn-warning btn-lg" onClick={gotoEditform}>
              Edit
            </button>
            <button
              className="btn btn-danger btn-lg mx-2"
              onClick={DeleteProduct}
            >
              Delete
            </button>
          </p>
        </div>
      </div>
    )
  );
};
export default ShowProducts;
