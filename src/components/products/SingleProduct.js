import React from "react";
import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddToCard,
  ProductFavButton,
  ProductImage,
} from "../../styles/product/products";
import ProductMeta from "./ProductMeta";
import { Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";

export default function SingleProduct({ product, matches }) {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction="row">
            <ProductFavButton isfav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddToCard variant="contained" >
         Add To Card
      </ProductAddToCard>
    </>
  );
}
