import { Box, Heading } from "@chakra-ui/layout";
import { Log } from "./components/Log";

interface LogsProps {
  logs: string[];
}

function Logs({ logs }: LogsProps) {
  return (
    <Box
      border="1px"
      borderColor="black"
      boxShadow="dark-lg"
      h="45em"
      w="30em"
      bg="white"
    >
      <Heading alignItems="center" mx="20px" my="10px" as="u" size="md">
        {logs.map((log) => {
          return <Log message={log} />;
        })}
      </Heading>
    </Box>
  );
}

export default Logs;
