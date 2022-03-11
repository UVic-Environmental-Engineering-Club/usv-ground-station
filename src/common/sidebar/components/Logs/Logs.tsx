import { Box, Heading } from "@chakra-ui/layout";
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
        {logs.map((log) => {
          return <Log message={log} />;
        })}
      </Box>
    </Box>
  );
}

export default Logs;
