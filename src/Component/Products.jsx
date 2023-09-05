import React, { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import ListItems from "./ListItems";

import axios from "axios";
const Products = () => {
    const [apiData, setApiData] = useState([]);
    const [apiFilterData, setApiFilterData] = useState([]);
    const [srch, setSrch] = useState("");

    const getApiData = async () => {
        const result = await axios.get(`https://fakestoreapi.com/products`);
        setApiData(result.data);
        setApiFilterData(result.data);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div>
            <h1 className="text-center">Products</h1>
            <br />

            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField varitant="outlined" label="search" fullWidth />
                </Grid>
                <br/>
                {apiFilterData.length &&
                    apiFilterData.map((item, index) => <ListItems key ={index} itemsList={item} />)}
            </Grid>
        </div>
    );
};

export default Products;
