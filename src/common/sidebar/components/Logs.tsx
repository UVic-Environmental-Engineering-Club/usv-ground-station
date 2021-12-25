import { Box, Heading, HStack } from "@chakra-ui/layout";

interface LogProps{
  logs: string []
}

function Logs({ logs }: LogProps) {
  return <Box border="1px" borderColor="black" boxShadow="dark-lg" h="95%" w="95%" bg="white">{logs.map((log) => {
    return <><>{log}</> <HStack alignItems="center" mx="20px" my="10px"> 
      <Heading as="u" size="md">Logs</Heading>
    </HStack></>
  })}</Box>;
}

export default Logs;