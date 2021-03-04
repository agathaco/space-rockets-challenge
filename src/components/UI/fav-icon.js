import React, { useState, useEffect } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { Heart } from "react-feather";
import { MotionBox } from "./motion-box";

export default function FavIcon({
  isFav,
  addToFav,
  removeFromFav,
  currentItem,
  variant,
  ...rest
}) {
  const iconStyle = isFav ? "pink.300" : "gray.400";
  const iconVariant = variant || "unstyled";
  const iconHoverColor = isFav ? "pink.400" : "gray.300";

  const [showAnimation, setShowAnimation] = useState(false);

  const controls = {
    scale: [1, 1.5, 1.1, 1.1],
    transition: { duration: 0.4 },
  };

  const handleClick = () => {
    if (isFav) {
      removeFromFav();
      setShowAnimation(false);
    } else {
      addToFav();
      setShowAnimation(true);
    }
  };

  useEffect(() => {
    setTimeout(() => setShowAnimation(false), 800);
  }, [showAnimation]);

  return (
    <Box
      boxSize={12}
      borderRadius="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...rest}
    >
      <MotionBox onClick={handleClick} animate={showAnimation ? controls : {}}>
        <IconButton
          aria-label="favorite"
          as={Heart}
          color={iconStyle}
          fill={iconStyle}
          size="sm"
          variant={iconVariant}
          transition="all 0.2s ease-in-out"
          _hover={{ fill: iconHoverColor, color: iconHoverColor }}
        />
      </MotionBox>
    </Box>
  );
}
