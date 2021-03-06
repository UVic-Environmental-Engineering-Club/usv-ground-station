import { Flex, HStack, VStack } from "@chakra-ui/react";
import MapContainer from "./common/map/containers/MapContainer";
import SidebarContainer from "./common/sidebar/containers/SidebarContainer";
import Header from "./common/components/header/Header";
import StatusbarContainer from "./common/statusbar/containers/StatusbarContainer";

function App() {
  return (
    <VStack align="stretch" h="100vh" overflow="hidden">
      <Header />
      <HStack height="100%" p="1em">
        <SidebarContainer width="35%" />
        <Flex flexDir="column" w="100%" h="100%">
          <MapContainer />
          <StatusbarContainer />
        </Flex>
      </HStack>
    </VStack>
  );
}

export default App;
