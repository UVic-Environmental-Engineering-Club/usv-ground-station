import { VStack } from "@chakra-ui/layout";
import Logs from "../components/Logs";
import Route from "../components/Route";

interface SidebarContainerProps {
  width: string;
}

function SidebarContainer({ width }: SidebarContainerProps) {
  return (
    <VStack maxW={width} minW={width} h="100vh" bg="white">
      <Logs logs={[""]} />
      <Route />
    </VStack>
  );
}

export default SidebarContainer;
