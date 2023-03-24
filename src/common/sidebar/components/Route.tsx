import { Box, Button, ButtonGroup, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useSocketContext } from "../../../lib/contexts/SocketContext";

function Route() {
  const {
    routePoints,
    deletePoint,
    isRouteSelection,
    clearRoute,
    clearShore,
    setIsRouteSelection,
  } = useSocketContext();
  return (
    <VStack
      h="full"
      w="100%"
      p="1em"
      border="1px"
      boxShadow="2xl"
    >
      <Box w="100%">
        <Flex justifyContent="space-between" pb={"3"}>
          <Heading
            as="h1"
            textDecoration="underline"
            size="md"
          >
            {isRouteSelection ? "Shore" : "Route"}
          </Heading>
          <Button
            onClick={() => {
              setIsRouteSelection(!isRouteSelection);
            }}
            size="xs"
            color="white"
            bg="#1D49B7"
          >
            {isRouteSelection ? "Shore" : "Route"} Selection
          </Button>
        </Flex>
<<<<<<< Updated upstream
        <Box
          height={"56"}
          overflowY="scroll"
        >
          {points.map((point) => {
            return (
              <HStack key={point.lat + point.long} justifyContent="space-between">
                <p>
                  lat: {point.lat.toFixed(4)}, long: {point.long.toFixed(4)}
                </p>
                <SmallCloseIcon
                  _hover={{ cursor: "pointer" }}
                  color="red.400"
                  onClick={() => {
                    deletePoint(point);
                  }}
                />
              </HStack>
            );
          })}
=======
        <Box height={"56"} overflowY="scroll">
          {isRouteSelection ? (
            shorePoints.map((point) => {
              return (
                <HStack key={point.lat + point.long} justifyContent="space-between">
                  <p>
                    lat: {point.lat.toFixed(4)}, long: {point.long.toFixed(4)}
                  </p>
                  <SmallCloseIcon
                    _hover={{ cursor: "pointer" }}
                    color="red.400"
                    onClick={() => {
                      deletePoint(point);
                    }}
                  />
                </HStack>
              );
            })
            ) : (
              routePoints.map((point) => {
                return (
                  <HStack key={point.lat + point.long} justifyContent="space-between">
                    <p>
                      lat: {point.lat.toFixed(4)}, long: {point.long.toFixed(4)}
                    </p>
                    <SmallCloseIcon
                      _hover={{ cursor: "pointer" }}
                      color="red.400"
                      onClick={() => {
                        deletePoint(point);
                      }}
                    />
                  </HStack>
                );
              })
            )}
>>>>>>> Stashed changes
        </Box>
      </Box>
        <Box w="100%" h="100%" >
          <Flex justifyContent="flex-end">
              <Button onClick={isRouteSelection ? clearShore : clearRoute} size="sm" color="white" bg="#B71E39">Clear {isRouteSelection ? "Shore" : "Route"}</Button>
          </Flex>
        </Box>
    </VStack>
  );
}

export default Route;
