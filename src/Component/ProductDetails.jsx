import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [prodData, setprodData] = useState([]);
    const getApiData = async () => {
        const result = await axios.get(
            `https://fakestoreapi.com/products/${id}`
        );

        console.log(result.data);
        setprodData(result.data);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div style = {{ margin: '16px 0px 5px 16px' , width: '450px'}}>
            
            <img src = { prodData.image }  width= "350px" height= "450px" style = {{     border: '1px solid lightgrey' , padding: '15px'}} /> 
            <h2> {prodData.title} </h2>
            <p> {prodData.price}</p>
            <p>{prodData.description}</p>
        </div>
    );
};

export default ProductDetails;
