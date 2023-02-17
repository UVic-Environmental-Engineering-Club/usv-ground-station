import { VStack } from "@chakra-ui/layout";
import { useContext } from "react";
import { useSettingsContext } from "../../../lib/contexts/SettingsContext";
import { SocketContext, Context } from "../../../lib/contexts/SocketContext";
import Controls from "../../controls/Controls";
import Logs from "../components/Logs/Logs";
import Route from "../components/Route";

interface SidebarContainerProps {
  width: string;
}

function SidebarContainer({ width }: SidebarContainerProps) {
  const { logs } = useContext<SocketContext>(Context);
  const { isManualControl } = useSettingsContext();

  return (
    <VStack maxW={width} minW={width} h="2xl">
      <Logs logs={logs} />
      {isManualControl ? <Controls /> : <Route />}
    </VStack>
  );
}

export default SidebarContainer;
