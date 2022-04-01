import { Routes, Route } from "react-router";
import { AddProduct } from "../Components/AddProducts/AddProduct";
import { Register } from "../Components/SignUp/Register";
import { SignUp } from "../Components/SignUp/Signup";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        {/* <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
};
