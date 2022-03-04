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
        <Heading alignItems="center" mx="20px" my="10px" size="md">
          {logs.map((log) => {
            return <Log message={log} />;
          })}
        </Heading>
      </Box>
    </Box>
  );
}

export default Logs;
