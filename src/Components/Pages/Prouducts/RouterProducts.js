import { Route, Routes } from "react-router-dom";
import Prouducts from "./Prouducts";
import ShowProducts from "./ShowProducts";
import EditProduct from "./EditProduct";

        
const RouterProducts = () => {
    return (
        <Routes>
            <Route path="/" element={<Prouducts/>}/>
            <Route path="/:id" element={<ShowProducts/>}/>
            <Route path="/editproduct/:id" element={<EditProduct/>}/>
        </Routes>
    );
};
export default RouterProducts;