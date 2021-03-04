import React from "react";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";

export default function ColorMode({ navbarColor }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = navbarColor;
  const iconHover = useColorModeValue("blackAlpha.200", "whiteAlpha.200")

  return (
    <IconButton
      color={iconColor}
      variant="ghost"
      _hover={{background: iconHover}}
      icon={colorMode === "light" ? <Moon/> : <Sun/> }
      onClick={toggleColorMode}
      isRound
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </IconButton>
  );
}