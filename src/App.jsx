import React from "react";
import Header from "./components/Navbar";
import Banner from "./components/Banner";
import FlashSale from "./components/FlashSale";
import OfficialStores from "./components/OfficialStores";
import Promotions from "./components/Promotions";
import Categories from "./components/Categories";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <FlashSale />
      <OfficialStores />
      <Promotions />
      <Categories />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
