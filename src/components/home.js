import React from "react";
import { Flex, Box, Text, Stack, Link } from "@chakra-ui/react";
import { ArrowRight } from "react-feather";
import { Link as BrowserLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="homepage photo-filter">
      <Stack m="6" spacing="10" mt={[6, "200px"]} direction={["column", "row"]}>
        <PageLink _hover={{ textDecoration: "none" }} url="/launches">
          Browse SpaceX Launches
        </PageLink>
        <PageLink _hover={{ textDecoration: "none" }} url="/launch-pads">
          Browse SpaceX Launch Pads
        </PageLink>
      </Stack>
    </div>
  );
}

function PageLink({ url, children, ...rest }) {
  return (
    <Link as={BrowserLink} to={url} {...rest}>
      <Flex
        justifyContent="space-between"
        p="6"
        boxShadow="lg"
        color="purple.800"
        rounded="2xl"
        bg="whiteAlpha.500"
        transition="all 0.2s ease-in-out"
        textDecoration="none"
        _hover={{ transform: "translateY(2px) translateZ(0)", boxShadow: "xl" }}
      >
        <Text fontSize="lg">{children}</Text>
        <Box as={ArrowRight} ml={3} pt={1} />
      </Flex>
    </Link>
  );
}
