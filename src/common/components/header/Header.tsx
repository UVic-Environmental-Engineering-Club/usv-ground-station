import {
  Image,
  Flex,
  Button,
  ButtonGroup,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { useSettingsContext } from "../../../lib/contexts/SettingsContext";

function Header() {
  const { isManualControl, setIsManualControl } = useSettingsContext();
  return (
    <Flex bg="white" h="8%" justify="space-between" w="100%">
      <HStack alignItems="center" mx="15px">
        <Image
          src="https://github.com/UVic-Environmental-Engineering-Club/usv-ground-station/blob/main/public/logo.png?raw=true"
          my="5px"
          w="50px"
          h="50px"
        />
        <Heading as="h1" size="md" isTruncated py="5px">
          {" "}
          Uvic Environmental Engineering Club
        </Heading>
      </HStack>
      <HStack mx="15px" alignItems="center">
        <ButtonGroup mx="10px" spacing="20px" size="lg">
          <Button color="white" bg="#B71E39">
            Stop
          </Button>
          <Button color="white" bg="#319795">
            Start
          </Button>
          <Button
            onClick={() => {
              setIsManualControl(!isManualControl);
            }}
          >
            {isManualControl ? "Manual Control" : "Autonomous"}
          </Button>
        </ButtonGroup>
      </HStack>
    </Flex>
  );
}

export default Header;
