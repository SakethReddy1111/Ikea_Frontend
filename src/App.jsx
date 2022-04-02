import "./App.css";
import { Home } from "./components/Home/home";
import { Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/productDetailspage/productDetailsPage";
import { NotFound } from "./components/NotFound/notfound";
import { Cart } from "./components/Cart/cart";
import Footer from "./components/footer/Footer";
import OfferBar from "./components/header/OfferBar";

import PrimarySearchAppBar from "./components/header/PrimarySearchAppBar";

import ProductsPage from "./components/Products/ProductsPage";
import ProductsBar from "./components/header/ProductsBar";

function App() {
  return (
    <div className="App">
      <OfferBar />
      <PrimarySearchAppBar />
      <ProductsBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productspage" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
