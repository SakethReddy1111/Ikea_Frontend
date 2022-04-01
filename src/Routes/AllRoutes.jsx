import { Routes, Route } from "react-router";
import { AddProduct } from "../Components/AddProducts/AddProduct";
import { SignUp } from "../Components/SignUp/Signup";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};
