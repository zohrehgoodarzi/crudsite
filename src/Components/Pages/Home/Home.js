import { NavLink } from "react-router-dom";
import Slider from "../Slider/Slider";
import "./HomestyleCss/HomeStyle.css";
import ProductSample from "./ProductSample";
import PostSample from "./PostSample";
const Home = () => {
  return (
    <div id="bodyhaome">
      <Slider />
      <div align="center" className="productSample">
        <h1 align="center" className="">
          Products
        </h1>
        <hr />
        <ProductSample />
        <div>
          <NavLink to={"/prouducts"} className="btn btn-info btn-md view">
            View All Products
          </NavLink>
        </div>
      </div>

      <div align="center" className="postSample">
        <h1 align="center" className="">
          Posts
        </h1>
        <hr />
        <PostSample />
        <div>
          <NavLink to={"/posts"} className="btn btn-secondary btn-md view">
            View All Posts
          </NavLink>
        </div>
      </div>


    </div>
  );
};
export default Home;
