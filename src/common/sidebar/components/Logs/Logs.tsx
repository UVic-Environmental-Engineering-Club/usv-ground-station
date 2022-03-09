import { Box, Heading, Text } from "@chakra-ui/layout";
import { Log } from "./components/Log";

interface LogsProps {
  logs: string[];
}

function Logs({ logs }: LogsProps) {
  return (
    <Box
      h="80%"
      w="100%"
      border="1px"
      borderColor="black"
      boxShadow="md"
      overflow="scroll"
    >
      <Box overflow="scroll">
        <Heading
          as="h1"
          textDecoration="underline"
          alignItems="center"
          mx="20px"
          my="10px"
          size="md"
        >
          Logs
        </Heading>
        <Text fontSize="md" fontWeight="bold" mx="10px" my="10px" isTruncated>
          {logs.map((log) => {
            return <Log message={log} />;
          })}
        </Text>
      </Box>
    </Box>
  );
}

export default Logs;
