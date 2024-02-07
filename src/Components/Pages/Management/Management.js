import { NavLink, useNavigate, useParams } from "react-router-dom";
import CustomHookProducts from "../../../CustomHooks/CustomHookProducts";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import ProductManagement from "./ProductManagement";
import PostManagement from "./PostManagement";
const Management = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return (
    <>
     <ProductManagement/>
     <hr/>
     <PostManagement/>
    </>
  );
};
export default Management;
