import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CreatePost = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const fullNameRef = useRef("");
  const emailRef = useRef("");
  const bodyRef = useRef("");
  const navigate = useNavigate();
  const fetchinfo = async () => {
    try {
      let res = await axios.post(
        "https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Posts",
        {
          name: name,
          email: email,
          body: body,
        },
        {
          /*{
			headers:{
				"Content-Type":"application/json, charset:UTF-8"
			}
		}*/
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const createPost = () => {
    fetchinfo();
    fullNameRef.current.value = "";
    emailRef.current.value = "";
    bodyRef.current.value = "";
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your information has been saved",
        showConfirmButton: false,
        timer: 1500
    });
    navigate("/posts");
  };

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
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  ref={fullNameRef}
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  ref={emailRef}
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
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                  ref={bodyRef}
                />
                {body.length < 5 && body.length <= 5 ? (
                  <span className="text-danger">this field required... </span>
                ) : (
                  ""
                )}
              </p>

              <button className="glow-on-hover" onClick={createPost}>
                ADD INfo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePost;
