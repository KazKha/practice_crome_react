import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Products from "./Component/Products";
import ProductDetails from "./Component/ProductDetails";


function App() {
    return (
        <div className="App">

            <Navbar />


            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path ="/about-us" element={<AboutUs/>}/>
                <Route exact path ="/contact-us" element={<ContactUs/>}/>
                <Route exact path ="/product-list" element={<Products/>}/>
                <Route exact path ="/product/:id" element={<ProductDetails/>}/>

            </Routes>

        </div>
    );
}

export default App;
