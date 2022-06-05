import { VStack,Flex,Heading, IconButton, useColorMode,Spacer } from "@chakra-ui/react";
import {FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'
import Header  from "./components/Header";
import  Profile  from "./components/Profile";
import  Social  from "./components/Social";


function App() {

  const {colorMode, toggleColorMode} = useColorMode();
  const isDark = colorMode ==="dark";

  return (
    <VStack p={5}>
      <Flex w='100%'>
        <Heading ml = "8" size="md" fontWeight ="semibold" color ="cyan.400">
          IamSK
        </Heading>
      <Spacer/>
      <IconButton ml={2} icon = {<FaLinkedin/> } onClick={()=>{window.open("https://www.linkedin.com/in/sathvik-k-95b473212")}}  isRound = "true" ></IconButton>
      <IconButton ml={3} icon = {<FaGithub/>} onClick={()=>{window.open('https://github.com/Sathvik902')}}  isRound = "true" ></IconButton>
      <IconButton ml={4} icon = {<FaInstagram/>} onClick={()=>{window.open("https://www.instagram.com/__sathvik.k__/")}}  isRound = "true" ></IconButton>
      <IconButton ml={8} icon = {isDark ? <FaSun/> : <FaMoon/> } onClick={toggleColorMode}  isRound = "true" ></IconButton>
      </Flex>
      <Header/>
      <Social/>
      <Profile/>
    </VStack>
  );
}

export default App;
