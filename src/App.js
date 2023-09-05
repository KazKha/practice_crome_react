import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import AboutUs from "./Component/AboutUs";
import ContactUs from "./Component/ContactUs";
import Products from "./Component/Products";


function App() {
    return (
        <div className="App">

            <Navbar />


            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path ="/about-us" element={<AboutUs/>}/>
                <Route exact path ="/contact-us" element={<ContactUs/>}/>
                <Route exact path ="/product-list" element={<Products/>}/>

            </Routes>

        </div>
    );
}

export default App;
