import React from "react";
import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';

function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="2xl" fontWeight="semibold">Hi, My name is</Text>
                    <Text fontSize="3xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Karthik Bhat Beedubail</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>
                    I am a Computer Science Graduate student at the University of New Brunswick, and I like creating web solutions and building web-based applications.
                    <br></br>My past experience involves creating Test Automation frameworks, APIs using NodeJs and spring-boot and creating back-end components in AEM
                    </Text>
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://www.linkedin.com/in/karthik-bhat-beedubail-195098128/")
                    }>Connect</Button>

                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src='https://media-exp1.licdn.com/dms/image/C5603AQGwO5gJ3F2S8A/profile-displayphoto-shrink_800_800/0/1658130619138?e=1664409600&v=beta&t=1jgK89_29JNqOIsbJaxtcB5h-hCyUiRcV8sjFHRNIYY' />
            </Flex>
        </Stack>
    )
}
export default Header;