import React, { useContext } from "react";
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
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";

import { LaunchItem } from "../launches";
import { LaunchPadItem } from "../launch-pads";
import FavContext from "../../context/fav-context";

export default function FavDrawer({ isOpen, onClose }) {
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
                      <LaunchItem
                        launch={launch}
                        key={launch.flight_number}
                        isOpen={isOpen}
                        onClose={onClose}
                      />
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
                        isOpen={isOpen}
                        onClose={onClose}
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
