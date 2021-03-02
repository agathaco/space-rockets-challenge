import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { Moon, Sun } from "react-feather";

export default function ColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      color="gray.500"
      bg="gray.800"
      _hover={{background: "gray.700"}}
      icon={colorMode === "light" ? <Moon/> : <Sun/> }
      onClick={toggleColorMode}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </IconButton>
  );
}