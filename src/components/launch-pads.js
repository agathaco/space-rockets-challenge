import React, { useContext } from "react";
import { Badge, Box, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import Error from "./error";
import Breadcrumbs from "./UI/breadcrumbs";
import LoadMoreButton from "./load-more-button";
import { useSpaceXPaginated } from "../utils/use-space-x";

import FavIcon from "./UI/fav-icon";
import FavContext from "../context/fav-context";

const PAGE_SIZE = 12;

export default function LaunchPads() {
  const { data, error, isValidating, size, setSize } = useSpaceXPaginated(
    "/launchpads",
    {
      limit: PAGE_SIZE,
    }
  );

  return (
    <div>
      <Breadcrumbs
        items={[{ label: "Home", to: "/" }, { label: "Launch Pads" }]}
      />
      <SimpleGrid m={[2, null, 6]} minChildWidth="350px" spacing="4">
        {error && <Error />}
        {data &&
          data
            .flat()
            .map((launchPad) => (
              <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />
            ))}
      </SimpleGrid>
      <LoadMoreButton
        loadMore={() => setSize(size + 1)}
        data={data}
        pageSize={PAGE_SIZE}
        isLoadingMore={isValidating}
      />
    </div>
  );
}

export function LaunchPadItem({ launchPad, isOpen, onClose }) {

  const {
    state: { favLaunchPads },
    addLaunchPadFavs,
    removeLaunchPadFavs,
  } = useContext(FavContext);

  const isFav = favLaunchPads
    .map((favItem) => favItem.id)
    .includes(launchPad.id);

  const closeDrawer = () => {
    if (isOpen) onClose();
  };

  return (
    <Box
      boxShadow="md"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      position="relative"
    >
      <FavIcon
        position="absolute"
        cursor="pointer"
        bottom={5}
        right={5}
        size="sm"
        variant="unstyled"
        isFav={isFav}
        addToFav={() => addLaunchPadFavs(launchPad)}
        removeFromFav={() => removeLaunchPadFavs(launchPad)}
      />
      <Box
        as={Link}
        to={`/launch-pads/${launchPad.site_id}`}
        onClick={closeDrawer}
      >
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {launchPad.status === "active" ? (
              <Badge px="2" variant="solid" colorScheme="green">
                Active
              </Badge>
            ) : (
              <Badge px="2" variant="solid" colorScheme="red">
                Retired
              </Badge>
            )}
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {launchPad.attempted_launches} attempted &bull;{" "}
              {launchPad.successful_launches} succeeded
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {launchPad.name}
          </Box>
          <Text color="gray.500" fontSize="sm">
            {launchPad.vehicles_launched.join(", ")}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
