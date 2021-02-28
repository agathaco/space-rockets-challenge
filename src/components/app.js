import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Heading,
  Icon,
  Text,
  Button,
  SimpleGrid,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import { Star } from "react-feather";

import Launches from "./launches";
import Launch from "./launch";
import Home from "./home";
import LaunchPads from "./launch-pads";
import LaunchPad from "./launch-pad";
import ColorMode from "./UI/color-mode";
import { LaunchItem } from "./launches";
import { LaunchPadItem } from "./launch-pads";

import FavContext from "../context/fav-context";

export default function App() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div>
      <NavBar openDrawer={onOpen} />
      <FavoritesDrawer isOpen={isOpen} onClose={onClose} />
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

function FavoritesDrawer({ isOpen, onClose }) {
  const {
    state: { favLaunches, favLaunchPads },
  } = useContext(FavContext);
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="sm" placement="right">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Favorites</DrawerHeader>
          <DrawerBody>
            <Accordion allowMultiple defaultIndex={[0, 1]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">
                        Favorite Launches ({favLaunches.length})
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <SimpleGrid spacing={5}>
                    {favLaunches.map((launch) => (
                      <LaunchItem launch={launch} key={launch.flight_number} />
                    ))}
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      <Heading size="md">
                        Favorite LaunchPads ({favLaunchPads.length})
                      </Heading>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <SimpleGrid spacing={5}>
                    {favLaunchPads.map((launchPad) => (
                      <LaunchPadItem
                        launchPad={launchPad}
                        key={launchPad.site_id}
                      />
                    ))}
                  </SimpleGrid>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
