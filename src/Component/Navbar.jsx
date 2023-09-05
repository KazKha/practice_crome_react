import { Grid } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    {" "}
                    <NavLink to="/"> Home </NavLink>
                </Grid>
                <Grid item xs={1}>
                    {" "}
                    <NavLink to="/about-us">  About-Us </NavLink>
                </Grid>
                <Grid item xs={1}>
                    {" "}
                    <NavLink to="/product-list">  Product </NavLink>
                </Grid>
                <Grid item xs={1}>
                    {" "}
                    <NavLink to="/contact-us"> ContactUs </NavLink>
                </Grid>
            </Grid>
        </div>
    );
}
