import { HStack, VStack } from "@chakra-ui/react";
import React from "react";

function StatusbarContainer() {
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
        <div>Online</div>
      </VStack>
      <VStack>
        <div>Latitude:</div>
        <div>0</div>
      </VStack>
      <VStack>
        <div>Logitude:</div>
        <div>0</div>
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
