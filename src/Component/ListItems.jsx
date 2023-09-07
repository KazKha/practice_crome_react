import { Card, CardContent, Grid } from "@mui/material";

import React from "react";
import { Link } from "react-router-dom";

const ListItems = ({ itemsList }) => {
    return (
        <Grid item xs={3}>
            <Card variant="outlined">
                <Link to={`/product/${itemsList.id}`} style={{textDecoration:'none'}}>
                    <CardContent
                        sx={{
                            textAlign: "center",
                            maxWidth: "100%",
                            height: "300px",
                            display: "inline-blocks",
                        }}
                    >
                        <img
                            src={itemsList.image}
                            width="180px"
                            height="250px"
                        />
                        <h5>{itemsList.title}</h5>
                    </CardContent>
                </Link>
            </Card>
        </Grid>
    );
};

export default ListItems;
