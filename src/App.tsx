import { Flex, HStack } from "@chakra-ui/react";
import MapContainer from "./common/map/containers/MapContainer";
import SidebarContainer from "./common/sidebar/containers/SidebarContainer";
import StatusbarContainer from "./common/statusbar/containers/StatusbarContainer";

function App() {
  return (
    <HStack bg="gray" height="100vh">
      <SidebarContainer width="35%" />
      <Flex flexDir="column" w="100%" h="100%">
        <MapContainer />
        <StatusbarContainer />
      </Flex>
    </HStack>
  );
}

export default App;
