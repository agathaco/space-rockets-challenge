import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Heart } from "react-feather";
import ColorMode from "./color-mode";
import { useLocation, Link } from "react-router-dom";

export default function NavBar({ openDrawer }) {
  const location = useLocation();
  const iconColor = "pink.300";
  const navbarMode = useColorModeValue("gray.800", "white");
  const navbarColor = location.pathname === "/" ? "white" : navbarMode;

  const displayFavText = useBreakpointValue({ base: "none", sm: "block" });
  const logoFontSize = useBreakpointValue({ base: "lg", sm: "xl" });
  const logoTextShadow = location.pathname === "/" ? "1px 1px #A0AEC0" : "none";

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      py={6}
      mx={6}
      borderBottom="1px"
      color={navbarColor}
      borderColor={navbarColor}
      position="relative"
      opacity="0.99"
      zIndex="overlay"
    >
      <Text
        as={Link}
        to="/"
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize={logoFontSize}
        textShadow={logoTextShadow}
      >
        ¡SPACE·R0CKETS!
      </Text>
      <Box>
        <Button
          onClick={openDrawer}
          variant="outline"
          colorScheme="white"
          mr="4"
        >
          <Icon as={Heart} boxSize={6} color={iconColor} fill={iconColor} />
          <Text ml="2" display={displayFavText}>
            Favorites
          </Text>
        </Button>
        <ColorMode navbarColor={navbarColor} />
      </Box>
    </Flex>
  );
}
