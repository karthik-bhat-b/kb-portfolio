import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa'

import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={4}>
      <Flex w="100%">
        <Heading ml={1} paddingEnd="2em" size="lg" fontWeight="semibold" color="cyan.600">
          KB
        </Heading>
        <br></br>  
        <IconButton icon={<FaLinkedin />} isRound='true' onClick={() =>
                        window.open("https://www.linkedin.com/in/karthik-bhat-beedubail-195098128/")
                    }></IconButton>
        <IconButton ml={2} icon={<FaGithub />} isRound='true' onClick={() =>
                        window.open("https://github.com/karthik-bhat-b")
                    }></IconButton>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Social></Social>
    </VStack>
  );
}

export default App;
