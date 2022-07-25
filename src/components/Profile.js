import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Stack, Box, Flex, Heading, Text } from '@chakra-ui/layout';

function Profile() {
    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
    return (
        <Stack>
        <Flex  direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start" paddingTop={0}>
            <Box alignSelf="center">
                <Heading fontWeight="bold" color="cyan.500" size="2xl">
                    2+
                </Heading>
                <Text fontSize="3xl" color="gray.400">Years of Experience</Text>
            </Box>
            <Box alignSelf="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="xl">Web Develoment, Test Automation, AEM Component Development, AEM Authoring, API development and Testing</Text>
            </Box>
        </Flex>
        </Stack>
    )
}

export default Profile;
