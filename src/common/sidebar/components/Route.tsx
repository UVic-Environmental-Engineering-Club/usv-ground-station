import { Box } from "@chakra-ui/react";
import { useSocketContext } from "../../../lib/contexts/SocketContext";

function Route() {
  const { points } = useSocketContext();
  return (
    <Box
      h="100%"
      w="100%"
      p="1em"
      overflow="scroll"
      border="1px"
      boxShadow="2xl"
    >
      {points.map((point) => {
        return (
          <Box key={point.lat + point.long}>
            lat: {point.lat.toFixed(4)}, long: {point.long.toFixed(4)}
          </Box>
        );
      })}
    </Box>
  );
}

export default Route;
