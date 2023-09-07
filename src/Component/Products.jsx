import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import ListItems from "./ListItems";

import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
    const [apiData, setApiData] = useState([]);
    const [apiFilterData, setApiFilterData] = useState([]);
    const [cateogryList, setCateogryList] = useState([]);
    const [srch, setSrch] = useState("");
    const [catFilter, setCatFilter] = useState("");

    const getApiData = async () => {
        const result = await axios.get(`https://fakestoreapi.com/products`);
        setApiData(result.data);
        setApiFilterData(result.data);

        const categoryList = await axios.get(
            "https://fakestoreapi.com/products/categories"
        );
        console.log(categoryList.data);
        setCateogryList(categoryList.data);
    };

    useEffect(() => {
        getApiData();
    }, []);

    useEffect(() => {
        
        const filtered = apiData.filter( item => 
                item.title.toUpperCase().includes(srch) ||
                item.category.toUpperCase().includes(srch) 
        );
        setApiFilterData(filtered);
        setCatFilter("");
    }, [srch]);

    useEffect(() => {
     
        const apiFiltered = apiData.filter(
            (items) => items.category === catFilter
        );
        setApiFilterData(apiFiltered);
        setSrch(srch)
    }, [catFilter]);

    return (
        <div>
            <h1 className="text-center">Products</h1>
            <br />

            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField
                        varitant="outlined"
                        value={srch}
                        label="search"
                        fullWidth
                        onChange={(e) => setSrch(e.target.value.toUpperCase())}
                    />
                </Grid>
                <br /><br /><br /><br />
                {cateogryList.length > 0 &&
                    cateogryList.map((catItem, index) => (
                        <Grid item xs={3} key={index}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={() => setCatFilter(catItem)}
                            >
                                {" "}
                                {catItem}{" "}
                            </Button>
                        </Grid>
                    ))}

                {apiFilterData.length > 0 &&
                    apiFilterData.map((item, index) => (
                       
                        <ListItems key={index} itemsList={item} />
                       
                    ))}
            </Grid>
        </div>
    );
};

export default Products;
