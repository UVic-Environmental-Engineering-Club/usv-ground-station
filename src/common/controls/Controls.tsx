import { Box, Button, Heading } from "@chakra-ui/react";
import { useSettingsContext } from "../../lib/contexts/SettingsContext";
import { AngleSlider } from "./components/AngleSlider/AngleSlider";
import { ControlBar } from "./components/ControlBar/ControlBar";

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
      <ControlBar />
    </Box>
  );
}

export default Controls;
