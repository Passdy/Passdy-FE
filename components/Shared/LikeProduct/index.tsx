import React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#0f8571",
  },
  "& .MuiRating-iconHover": {
    color: "#0f8571",
  },
});

const LikeProduct: React.FC = () => (
  <>
    <StyledRating
      name="customized-color"
      defaultValue={0}
      getLabelText={(value: number) => `${value} Heart${value !== 1 ? "s" : ""}`}
      precision={1}
      icon={<FavoriteIcon fontSize="inherit" className="text-green-700" />}
      emptyIcon={<FavoriteBorderIcon fontSize="inherit" className="text-green-700" />}
      max={1}
    />
  </>
);

export default LikeProduct;
