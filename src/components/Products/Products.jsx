import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import stocks from "../../stocks";

export default function Products() {
  // assigning all of stocks data from the JSON dataset.
  const products = stocks;

  return (
    // mapping through the objects list and displaying all of the products.
    <div style={{ marginLeft: "7em" }}>
      <Typography variant="h4">List of Available Stocks</Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} m={3} lg={3}>
            <Card sx={{ maxWidth: 250 }}>
              <CardMedia
                component="img"
                height="250"
                image={product.imgUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography gutterBottom variant="subtitle" component="div">
                  Price: $ {product.cost}
                </Typography>
                <Typography variant="subtitle">
                  Available: {product.available}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
