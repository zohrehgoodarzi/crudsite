import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdatePost = ({post}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");
  const navigate = useNavigate();

  const UpdateForm = () => {
    const UpdatePostt = async () => {
      try {
        let res = await axios.put(
          `https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Posts/${post.id}`,
          {
            name:name,
            email:email,
            body:body
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

    UpdatePostt();
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
    setName(post.name);
    setEmail(post.email);
    setBody(post.body);
    
  }, []);
  return (
    
    <>
    <div className="shade">
      <div className="blackboard">
        <div>
          <div className="form">
            <p>
              <label>FullName: </label>
              <input
                type="text"
                id="FullName"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                
              />
              {name.length === 0 ? (
                <span className="text-danger">this field required</span>
              ) : (
                ""
              )}
            </p>
            <p>
              <label>Email: </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => {
                 setEmail(e.target.value);
                }}
                
              />
              {email.length === 0 ? (
                <span className="text-danger">this field required</span>
              ) : (
                ""
              )}
            </p>
            <p>
              <label>Description : </label>
              <input
                type="textarea"
                id="body"
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                
              />
              {body.length < 5 && body.length <= 5 ? (
                <span className="text-danger">this field required... </span>
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
    </div>
  </>
      


          
        
  );
};
export default UpdatePost;
