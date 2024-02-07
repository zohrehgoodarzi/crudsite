import axios from "axios";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import CustomHookShowPost from "../../../CustomHooks/CustomHookShowPost";

const ShowPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let { isLoading, isError, error, data }=CustomHookShowPost();
  
  if (isLoading) {
    return <h1>isloading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const gotoEditform = () => {
    navigate(`/posts/editposts/${id}`);
  };
  const DeletePost=async()=>{
    
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
          const res=axios.delete(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Posts/${id}`,
          {method:"delete"}
          
          
          
          )
             console.log("delete succsee");
             navigate("/posts");
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

const BackToHome=()=>{
  navigate(`/`);
}
  const BackToPosts=()=>{
    navigate(`/posts`);
  }
  
 
 

  return (
    <div className="cardpost" id="showPostt">
      <div className="title">
        <NavLink className="navlink">
          {data.name.substr(0,20)}
        </NavLink>
      </div>

      <div className="features">
        <ul>
          <li>
            <span>Information</span>
            Name : {data.name}
          </li>
          <li>Email : {data.email}</li>
          <li>Description : {data.body}</li>
        </ul>
      </div>
        
      <button onClick={BackToHome} className="btn btn-primary btn-lg mx-2">
                BackToHome
            </button>
            <button onClick={BackToPosts} className="btn btn-light btn-lg mx-2">
                BackToPosts
            </button>

             <button className="btn btn-warning btn-lg" onClick={gotoEditform}>
              Edit
            </button>
            <button
              className="btn btn-danger btn-lg mx-2"
              onClick={DeletePost}
            >
              Delete
            </button>
        
      
    </div>
  );
};
export default ShowPost;
