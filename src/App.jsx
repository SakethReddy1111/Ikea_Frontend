import "./App.css";
import { Home } from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/productDetailspage/productDetailsPage";
import { NotFound } from "./components/NotFound/notfound";
import { Cart } from "./components/Cart/cart";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
