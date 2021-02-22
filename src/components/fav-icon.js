import React from "react";
import { IconButton } from "@chakra-ui/core";
import { Star } from "react-feather";

export default function FavIcon({ isFav, addToFav, removeFromFav, ...props }) {
  const iconStyle = isFav ? "orange" : "#dedede";
  return (
    <IconButton
      aria-label="favorite"
      as={Star}
      variant="unstyled"
      size="sm"
      onClick={() => isFav ? removeFromFav() : addToFav()}
      style={{fill: `${iconStyle}`, color: `${iconStyle}`}}
      {...props}
    />
  );
}