import { Box, Heading } from "@chakra-ui/layout";
import { Log } from "./components/Log";

interface LogsProps {
  logs: string[];
}

function Logs({ logs }: LogsProps) {
  return (
    <Box
      h="full"
      w="100%"
      border="1px"
      borderColor="black"
      boxShadow="md"
    >
      <Box overflow="hidden">
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
        <Box
          h="60"
          overflowY="scroll"
        >
          {logs.map((log) => {
            return <Log message={log} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Logs;
