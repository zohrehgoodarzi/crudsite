import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import CustomHookProducts from "../../../CustomHooks/CustomHookProducts";
import { useState } from "react";

        
const ProductManagement = () => {
    const [deleteProd, setDeleteProd] = useState(null);
  let { isLoading, isError, error, data } = CustomHookProducts();

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }

    return (
       <>
       
       {data &&
        data.map((elem) => {
          return (
            <div key={elem.id} id="produ">
              <div className="card " style={{ width: "18rem" }}>
                <img
                  src={require(`../../../media/${elem.urll}`)}
                  className="card-img-top"
                  alt={elem.title.substr(0, 10)}
                />
                <div className="card-body">
                  <h5 className="card-title">{elem.title.substr(0, 10)}</h5>
                  <p className="card-text">{elem.description.substr(0, 50)}</p>
                  <p className="card-text text-danger fw-bolder">
                    {elem.price}
                  </p>
                  
                  <p>
                  <NavLink
                    to={`/prouducts/${elem.id}`}
                    className="btn btn-primary"
                  >
                    View More
                  </NavLink>
                  </p>
                  <p>
                    <NavLink
                      className="btn btn-warning btn-lg"
                      to={`/prouducts/editproduct/${elem.id}`}
                    >
                      Edit
                    </NavLink>
                    
                   
                    <button
                      className="btn btn-danger btn-lg mx-2"
                      onClick={() => {
                        Swal.fire({
                          title: "Are you sure?",
                          text: "You won't be able to revert this!",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Yes, delete it!",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            Swal.fire({
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success",
                            });
                            setDeleteProd(
                              axios.delete(
                                `https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Products/${elem.id}`,
                                { method: "delete" }
                              )
                            );
                            console.log("Delete is Success! :D");
                          }
                        });
                      }}
                    >
                      Delete
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
       </>
    );
};
export default ProductManagement;