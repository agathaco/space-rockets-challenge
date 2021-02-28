import React from "react";
import { IconButton } from "@chakra-ui/react";
import { Star } from "react-feather";

export default function FavIcon({ isFav, addToFav, removeFromFav, ...props }) {
  const iconStyle = isFav ? "orange" : "#BEBEBE";
  const iconSize = props.size || "md";
  const iconVariant = props.variant || "solid";
  return (
    <IconButton
      aria-label="favorite"
      as={Star}
      variant={iconVariant}
      size={iconSize}
      onClick={() => isFav ? removeFromFav() : addToFav()}
      style={{fill: `${iconStyle}`, color: `${iconStyle}`}}
      {...props}
    />
  );
}