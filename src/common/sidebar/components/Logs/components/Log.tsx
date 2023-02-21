import { Text } from "@chakra-ui/layout";
import React from "react";

interface LogProps {
  message: string;
}

export const Log = ({ message }: LogProps) => {
  return (
    <span>
      <Text fontSize="xs" letterSpacing="-1px" my="-3px" px="10px">
        {message}
      </Text>
    </span>
  );
};
