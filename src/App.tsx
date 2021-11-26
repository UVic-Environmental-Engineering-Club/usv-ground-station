import { HStack } from "@chakra-ui/react";
import MapContainer from "./common/map/containers/MapContainer";
import SidebarContainer from "./common/sidebar/containers/SidebarContainer";

function App() {
  return (
    <HStack bg="gray" height="100vh">
      <SidebarContainer width="35%" />
      <MapContainer />
    </HStack>
  );
}

export default App;
