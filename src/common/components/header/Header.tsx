import {Image, Flex, Button, Heading, HStack } from "@chakra-ui/react";

function Header() {
    return (
        <HStack h="50px"  >
            <Flex justify="space-between" w="100%" >
                 <Image src="https://github.com/UVic-Environmental-Engineering-Club/usv-ground-station/blob/main/public/logo.png?raw=true" width="50px" height="50px"/>
                 <Heading m="10px 15px"> Uvic Environmental Engineering Club</Heading>
                <div >
                    <Button m="10px 15px 10px 10px" color="white" backgroundColor="#B71E39">Stop</Button>
                    <Button m="10px" color="white" backgroundColor="#319795">Start</Button>
               </div>
            </Flex>
        </HStack>
    )
}

export default Header
