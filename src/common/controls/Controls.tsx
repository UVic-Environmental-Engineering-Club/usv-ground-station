import { Box, Heading } from "@chakra-ui/react";
import { AngleSlider } from "./components/AngleSlider/AngleSlider";
import { PowerBar } from "./components/PowerBar/PowerBar";

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
      <AngleSlider />
      <PowerBar />
    </Box>
  );
}

export default Controls;
