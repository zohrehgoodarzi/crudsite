import { NavLink, useNavigate } from "react-router-dom";
import CustomHookProducts from "../../../CustomHooks/CustomHookProducts";
import "./ProductsCss/Product.css";

const Prouducts = () => {
  const navigate=useNavigate();
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
                  alt={elem.title.substr(0,10)}
                />
                <div className="card-body">
                  <h5 className="card-title">{elem.title.substr(0, 10)}</h5>
                  <p className="card-text">{elem.description.substr(0, 50)}
                  </p>
                  <p className="card-text text-danger fw-bolder">{elem.price}</p>
                  <NavLink to={`./${elem.id}`} className="btn btn-primary">
                    View More
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Prouducts;
