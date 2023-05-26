import React from "react";
import { ProductMetaWrapper } from "../../styles/product/products";
import { Typography } from "@mui/material";

export default function ProductMeta({ product, matches }) {
  return (
    <ProductMetaWrapper>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {product.name}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        ${product.price}
      </Typography>
    </ProductMetaWrapper>
  );
}
