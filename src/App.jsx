import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Navbar";
import Banner from "./components/Banner";
import FlashSale from "./components/FlashSale";
import OfficialStores from "./components/OfficialStores";
import Promotions from "./components/Promotions";
import Categories from "./components/Categories";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Login from "./components/Login";
import Category from "./components/Category";

// Wrapper component to use useLocation inside Router
const Layout = () => {
  const [query, setQuery] = useState("");
  const location = useLocation();

  const hideHeaderOnPaths = ["/login"];

  return (
    <>
      {!hideHeaderOnPaths.includes(location.pathname) && (
        <Header onSearch={setQuery} />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <FlashSale />
              <OfficialStores />
              <Promotions />
              <Categories />
              <ProductGrid searchQuery={query} />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <CartProvider>
      
        <Layout />
      
    </CartProvider>
  );
}

export default App;
