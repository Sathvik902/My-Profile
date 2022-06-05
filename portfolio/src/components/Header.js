import { Circle,Box,Text,Stack,Flex } from '@chakra-ui/react'
import { useMediaQuery} from '@chakra-ui/media-query'
import {Button} from '@chakra-ui/button';
import {useColorMode} from '@chakra-ui/color-mode';
import {Image} from '@chakra-ui/image';
import  React from 'react';
import image from './Image/image.jpeg';



export default function Header() {
  const {colorMode} = useColorMode();
  const isDark = colorMode === "dark";
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');


  return (
    <Stack>
      
      <Circle position="absolute" bg = "blue.100" opacity = "0.1" w="300px" h = "300px" alignSelf = "flex-end" zIndex={-1}></Circle>
      <Flex direction={isNotSmallerScreen? "row":"column"  } spacing='200px' p= {isNotSmallerScreen?"16":"5"} alignSelf="flex-start">
      <Box mt = {isNotSmallerScreen?"0":'8'} align="flex-start">
        
        <Text fontSize="5xl" fontWeight="semibold" >Hi I am,</Text>
        <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r,cyan.400,blue.500,purple.600)" bgClip="text"  mb={isNotSmallerScreen ?'0':'12'}>Sathvik</Text>
        <Text color={isDark? "gray.200":"grey.500"}>A Second year Engineering student who is well-versed in Web development, problem solving and Currently searching for an internship in MERN-stack web development.</Text>
        
        <Button mt = {8} colorScheme="blue" onClick={()=>{
          window.open("https://www.linkedin.com/in/sathvik-k-95b473212")}
          }>Hire me</Button>
      </Box>
      <Image alignSelf="center" ml='12px'  mb={isNotSmallerScreen ?'0':'8'} borderRadius="full" backgroundColor = "black" boxShadow="lg" boxSize="300px"src={image}  />
      </Flex>
    </Stack>
  );
}