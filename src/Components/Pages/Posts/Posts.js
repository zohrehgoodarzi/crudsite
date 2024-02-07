import Skeleton from "react-loading-skeleton";
import CustomHookPosts from "../../../CustomHooks/CustomHookPosts";
import "../Posts/Postscss/Posts.css";
import { NavLink } from "react-router-dom";
import FooterAccount from "../Footer/FooterAccount";
const Posts = () => {
  const { isLoading, isError, error, data } = CustomHookPosts();
  if (isLoading) {
    return <h1>isloading</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
    <div id ="mainsection">
      
            <NavLink className="glow-on-hover" to={`/posts/create`} type="submit">CreatePost</NavLink>
        
      {data &&
        data.map((elem) => {
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
                    Description : {elem.body.substr(0,30)}
                  </li>
                  
                </ul>
              </div>

              <NavLink to={`./${elem.id}`} className="btnread">
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
export default Posts;
