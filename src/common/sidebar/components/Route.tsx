import { Box, Button, Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useSocketContext } from "../../../lib/contexts/SocketContext";

function Route() {
  const {
    points,
    deletePoint,
    isRouteSelection,
    clearRoute,
    clearShore,
    shorePoints,
    setIsRouteSelection,
  } = useSocketContext();

  const handleRouteSelection = () => {
    setIsRouteSelection(!isRouteSelection);
  };

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
            type="button"
            onClick={handleRouteSelection}
            size="xs"
            color="white"
            bg="#1D49B7"
          >
            {isRouteSelection ? "Shore" : "Route"} Selection
          </Button>
        </Flex>
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
              points.map((point) => {
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
        </Box>
      </Box>
        <Box w="100%" h="100%" >
          <Flex justifyContent="flex-end">
              <Button type="button" onClick={isRouteSelection ? clearShore : clearRoute} size="sm" color="white" bg="#B71E39">Clear {isRouteSelection ? "Shore" : "Route"}</Button>
          </Flex>
        </Box>
    </VStack>
  );
}


export default Route;
