import { Box, Heading, HStack } from "@chakra-ui/layout";

function Logs() {
  return (
    <Box border="1px" borderColor="black" boxShadow="dark-lg" h="45em" w="30em" bg="white">
      <Heading alignItems="center" mx="20px" my="10px" as="u" size="md">Logs</Heading>
    </Box>
  )
}

export default Logs;