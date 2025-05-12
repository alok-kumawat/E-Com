import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const [query, setQuery] = useState("");

  return (
    <CartProvider>
      <Router>
        <Header onSearch={setQuery} />
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
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
