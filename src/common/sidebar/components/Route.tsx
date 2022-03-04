import { Box, Button, HStack, VStack } from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { useSocketContext } from "../../../lib/contexts/SocketContext";

function Route() {
  const { points, deletePoint, clearRoute } = useSocketContext();
  return (
    <VStack
      h="100%"
      w="100%"
      p="1em"
      overflow="scroll"
      border="1px"
      boxShadow="2xl"
    >
      <Box w="100%" overflowY="scroll">
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
      </Box>
      <Button onClick={clearRoute}>Clear Route</Button>
    </VStack>
  );
}

export default Route;
