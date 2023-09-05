import { Button, Card, CardContent, Grid, Link } from '@mui/material';
import React from 'react';

const ListItems = ( {itemsList} ) => {
    return (
        <Grid item xs = {3}>
            <Card variant="outlined">
                <CardContent sx ={{ textAlign :'center' , maxWidth:'100%' , height :'300px', display : 'inline-blocks' }}>
                   <img src={itemsList.image}   width='180px' height='250px'/>
                   <h5>{itemsList.title}</h5>
                   <Link />
                
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ListItems;
