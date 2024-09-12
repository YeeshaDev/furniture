//import React from "react";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductDetails";
import ContactUs from "./pages/Contact";
import Faq from "./pages/Faq";
import NotFoundPage from "./pages/NotFoundPage";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Checkout from "./pages/Checkout";


const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
};

export default App;
