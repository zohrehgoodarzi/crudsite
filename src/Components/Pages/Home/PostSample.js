import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

        
const PostSample = () => {
    const [post,setPost]=useState(null);
  const fetchapi = async()=>{
    let result=await axios.get(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Posts`);
    const res = result.data;
    const fiilter=res.filter((post)=>post.id<4);
    const showfiilter=fiilter;
    setPost(showfiilter);
     console.log(fiilter);
   console.log(showfiilter);
    //console.log(res); 
    //
  };

  useEffect(()=>{
    fetchapi();
  },[]);



    return (
        <>
       <div id ="mainsection">
      {post &&
        post.map((elem) => {
          return (
            <div className="cardmainpost"  key={elem.id}>
            <div className="cardpost" >
              <div className="title">
                <NavLink className="navlink" to={`/${elem.id}`}>
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
                    Description : {elem.body.substr(0,15)}
                  </li>
                  
                </ul>
              </div>

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
export default PostSample;