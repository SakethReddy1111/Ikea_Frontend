import { Routes, Route } from "react-router";
import { AddProduct } from "../Components/AddProducts/AddProduct";
import { Login } from "../Components/Login/Login";
import { Register } from "../Components/SignUp/Register";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
