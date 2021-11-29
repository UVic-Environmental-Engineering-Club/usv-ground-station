import {Image, Flex, Button, Heading, HStack} from "@chakra-ui/react";

function Header() {
    return (
        <HStack bg="white" h="72px" >
            <Flex justify="space-between" w="100%" >
                <HStack>
                    <Image src="https://github.com/UVic-Environmental-Engineering-Club/usv-ground-station/blob/main/public/logo.png?raw=true" alignSelf="center" m="5px 5px 5px 15px" width="50px" height="50px"/>
                    <Heading m="10px 15px" fontSize={18} > Uvic Environmental Engineering Club</Heading>
                </HStack>
                <HStack mr="15px">
                    <Button m="auto" mr="15px" color="white" bg="#B71E39" h="48px" w="89px">Stop</Button>
                    <Button m="auto" ml="15px" color="white" bg="#319795" h="48px" w="89px">Start</Button>
            </HStack>
            </Flex>
        </HStack>
    )
}

export default Header
