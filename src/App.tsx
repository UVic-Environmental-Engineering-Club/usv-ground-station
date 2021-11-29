import { HStack, VStack } from "@chakra-ui/react";
import MapContainer from "./common/map/containers/MapContainer";
import SidebarContainer from "./common/sidebar/containers/SidebarContainer";
import Header from "./common/components/header/Header"

function App() {
  return (
    <VStack align="stretch" bg="orange" >
      <Header/>
      <HStack bg="gray" height="100vh">
        <SidebarContainer width="35%" />
        <MapContainer />
      </HStack>
    </VStack>
  );
}

export default App;
