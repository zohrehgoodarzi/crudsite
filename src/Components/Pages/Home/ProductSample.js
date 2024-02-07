import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

    
const ProductSample = () => {
 const [product,setProduct]=useState(null);
  const fetchapi = async()=>{
    let result=await axios.get(`https://my-json-server.typicode.com/zohrehgoodarzi/dbjson/Products`);
    const res = result.data;
    const filterr=res.filter((products)=>products.id<4);
    const showfilter=filterr;
    setProduct(showfilter);
     console.log(filterr);
   console.log(showfilter);
    //console.log(res); 
    //
  };

  useEffect(()=>{
    fetchapi();
  },[]);

  return(
    <>
    {
      product&&product.map((elem)=>{
        return(
         
          <div key={elem.id} id="produ">
            
          <div className="card " style={{ width: "18rem" }}>
            <img
              src={require(`../../../media/${elem.urll}`)}
              className="card-img-top"
              alt={elem.title.substr(0,10)}
            />
            <div className="card-body">
              <h5 className="card-title">{elem.title.substr(0, 10)}</h5>
              <p className="card-text">{elem.description.substr(0, 50)}</p>
              <p className="card-text text-danger fw-bolder">{elem.price}</p>
              <NavLink to={`/prouducts/${elem.id}`} className="btn btn-primary">
                View More
              </NavLink>
            </div>
          </div>
         
        </div>
        
        )
      })
    }
    </>
  )



};
export default ProductSample;