import { useState } from "react";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import CustomHookPosts from "../../../CustomHooks/CustomHookPosts";
import axios from "axios";

        
const PostManagement = () => {
    const [deletePost,setDeletePost]=useState(null);
    let { isLoading, isError, error, data } = CustomHookPosts();

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }
    return (
       <>
       <div id ="mainsection">
        
      {data &&
        data.map((elem) => {
          return (
            <div className="cardmainpost"  key={elem.id}>
            <div className="cardpost" >
              <div className="title">
                <NavLink className="navlink" to={`posts/${elem.id}`}>
                    {elem.name.substr(0,20)}
                    </NavLink>
                    </div>

              <div className="features">
                <ul>
                  <li>
                  <span>Information</span>
                 Name : {elem.name.substr(0,15)}
                  </li>
                  <li>
                    
                   Email : {elem.email.substr(0,15)}
                  </li>
                  <li>
                    Description : {elem.body.substr(0,30)}
                  </li>
                  
                </ul>
              </div>
              <div className="createButton">
            <NavLink className="glow-on-hover" to={`/posts/create`} type="submit" id="create">CreatePost</NavLink>
             </div>
             <NavLink className="btn btn-warning btn-lg" to={`/posts/editposts/${elem.id}`}>
              Edit
            </NavLink>
            <button
              className="btn btn-danger btn-lg mx-2"
              onClick={()=>{
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
                      setDeletePost(axios.delete(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Posts/${elem.id}`,
                     {method:"delete"}));
                      console.log("Delete is Success! :D");
                    }
                  });
             
              }}
            >
              Delete
            </button>
              <NavLink to={`/posts/${elem.id}`} className="btnread">
                ReadMore
              </NavLink>
            </div>
            </div>
          );
        })}
        </div>
      <div className="impost">
     
      </div>
       </>
    );
};
export default PostManagement;