import react from "react"
import {Flex, Button, Heading, HStack } from "@chakra-ui/react";

function Header() {
    return (
        <HStack h="10vh" >
            <Flex justify="space-between" w="100%" >
                <Heading m="10px 15px"> Uvic Environmental Engineering Club</Heading>
                <div >
                    <Button m="10px">Start</Button>
                    <Button m="10px 15px 10px 10px">Stop</Button>
               </div>
            </Flex>
        </HStack>
    )
}

export default Header
