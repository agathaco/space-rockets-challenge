import React from "react";
import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Star } from "react-feather";
import ColorMode from "./color-mode";

export default function NavBar({ openDrawer }) {
  const starFill = useColorModeValue("orange", "orange.300")
  const starOutline = useColorModeValue("orange", "orange.400")

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="gray.800"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        ¡SPACE·R0CKETS!
      </Text>
      <Box>
        <Button onClick={openDrawer} variant="solid" colorScheme="blue" mr="4">
          <Icon
            as={Star}
            boxSize={6}
            color={starOutline}
            fill={starFill}
            mr="2"
          />
          Favorites
        </Button>
        <ColorMode />
      </Box>
    </Flex>
  );
}