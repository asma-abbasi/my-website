import React, { useState } from "react";
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

export default function SingleProductDesktop({ product, matches }) {
  const [showOptions, setShowOption] = useState(false);

  const handleMouseEnter = () => {
    setShowOption(true);
  };
  const handleMouseLeave = () => {
    setShowOption(false);
  };
  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image} />
        <ProductFavButton isfav={0}>
          <FavoriteIcon />
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCard show={showOptions} variant="contained">
            Add To Card
          </ProductAddToCard>
        )}
        
        <ProductActionWrapper show={showOptions}>
          <Stack direction="column">
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductMeta product={product} matches={matches} />
    </>
  );
}
