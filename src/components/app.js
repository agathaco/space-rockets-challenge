import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
  Button,
  useDisclosure } from "@chakra-ui/react";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";

export default function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <NavBar openDrawer={onOpen} />
      <FavoritesDrawer isOpen={isOpen} onClose={onClose}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches" element={<Launches />} />
        <Route path="/launches/:launchId" element={<Launch />} />
        <Route path="/launch-pads" element={<LaunchPads />} />
        <Route path="/launch-pads/:launchPadId" element={<LaunchPad />} />
      </Routes>
    </div>
  );
}

function NavBar({ openDrawer }) {
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
      <Button onClick={openDrawer} variant="solid" colorScheme="blue">
        Favorites
      </Button>
    </Flex>
  );
}

function FavoritesDrawer({ isOpen, onClose }) {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="sm"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favorites</DrawerHeader>
          <DrawerBody>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button color="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}
