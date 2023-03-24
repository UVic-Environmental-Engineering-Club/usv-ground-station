import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { useSocketContext } from "../../../lib/contexts/SocketContext";

function StatusbarContainer() {
  const {
    usvPoint,
  } = useSocketContext();
  return (
    <HStack
      grow={1}
      h="20%"
      p="1em"
      my="1em"
      border="1px"
      borderColor="black"
      justifyContent="space-between"
      boxShadow="2xl"
    >
      <VStack>
        <div>Status:</div>
        <span>{usvPoint ? 'Online' : 'Offline'}</span>
      </VStack>
      <VStack>
        <div>Latitude:</div>
        <span>{usvPoint?.lat.toFixed(6)}</span>
      </VStack>
      <VStack>
        <div>Logitude:</div>
        <span>{usvPoint?.long.toFixed(6)}</span>
      </VStack>
      <VStack>
        <div>Speed:</div>
        <div>0</div>
      </VStack>
      <VStack>
        <div>Battery:</div>
        <div>0</div>
      </VStack>
      <VStack>
        <div>Warnings:</div>
        <div>None</div>
      </VStack>
    </HStack>
  );
}

export default StatusbarContainer;
