import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';

const ListItems = ( {itemsList} ) => {
    return (
        <Grid item xs = {3}>
            <Card variant="outlined">
                <CardContent sx ={{ textAlign :'center' ,width:'200px'}}>
                   <img src={itemsList.image}   sx= {{  maxWidth:'100%',  height:'auto', objectFit: 'contain'}}/>
                   <h5>{itemsList.title}</h5>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ListItems;
