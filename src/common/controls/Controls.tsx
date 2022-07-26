import { Box, Heading, SliderMark } from "@chakra-ui/react";
import { ControlBar } from "./components/controlBar/ControlBar";

function Controls() {
  return (
    <Box
      h="100%"
      w="100%"
      p="1em"
      border="1px"
      borderColor="black"
      boxShadow="2xl"
    >
      <Heading as="h1" textDecoration="underline" alignItems="center" size="md">
        Controls
      </Heading>
      <ControlBar />
    </Box>
  );
}

export default Controls;
