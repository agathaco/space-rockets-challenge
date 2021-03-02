import React, { useState } from "react";
import { IconButton, Box, forwardRef } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import { Star } from "react-feather";

export default function FavIcon({ isFav, addToFav, removeFromFav, ...props }) {
  const iconStyle = isFav ? "orange" : "#BEBEBE";
  const iconVariant = props.variant || "unstyled";
  const iconHoverColor = isFav ? "orange.300" : "gray.300";

  const MotionBox = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      );
      return <Box ref={ref} {...chakraProps} />;
    })
  );

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

  return (
    <Box
      boxSize={12}
      borderRadius="full"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      {...props}
    >
      <MotionBox onClick={handleClick} animate={showAnimation ? controls : {}}>
        <IconButton
          aria-label="favorite"
          as={Star}
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
