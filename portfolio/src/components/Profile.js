import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex } from "@chakra-ui/layout";
import { Button, Box,Heading,Text } from "@chakra-ui/react";





export default function Profile() {
  const [isNotSmallerScreen] = useMediaQuery('(min-width: 600px)');
  // const openAbout = ()=>{
  //   return "../About.js"
  // }
  
  return (
    <div>
      <Flex direction="column" w="100%" maxWidth={{base:"100vh",md:"130vh" , lg:"130vh",xl:"130vh" }}>
      
      <Box  alignSelf="center" px="32" py="16" >
        <Heading fontWeight="bold"  color="cyan.500" size="2xl">
          Enthusiastic
        </Heading>
        <Text fontSize="2xl" color="gray.500" alignItems='center' >  Web developer</Text>
      </Box>
      
      <Box alignSelf='center'  px="18"  >
        <Text fontSize = "2xl"fontWeight="semibold"alignSelf='center'pl={isNotSmallerScreen?140:20} >Web designer and developer</Text>
        <Flex direction={isNotSmallerScreen?"row":"column"} mt={4}>
          <Flex alignSelf='center' direction = "column"  rounded="xl"  mt={0} background="blue.400" h="30vh" w = '30vh' justify='flex-end' >
            <Button color='white' fontSize="xl" fontWeight="semibold" backgroundColor="blue.400" alignSelf='center' onClick={()=>{ window.open( 'https://github.com/Sathvik902')}}>Git Repository</Button>
            <Text color='white.500' fontSize="xl" fontWeight="semibold"alignSelf='center'>My Efforts</Text>
          </Flex>
          
          <Flex  direction = "column" rounded="xl" alignSelf='center' spacing='200px' mt={6} background="gray.200" h="30vh" w = '30vh' justify='flex-end'_hover={{background: 'teal.400'}}>
          <Text color='gray.400' fontSize="2xl"mt={0} fontWeight="semibold" pl={9} alignItems='center'>Checkout my linkedin profile here</Text>
            <Button backgroundColor='grey.400' fontSize="xl"color='black' fontWeight="semibold" alignSelf='center'onClick={()=>window.open( 'https://www.linkedin.com/in/sathvik-k-95b473212')}>Linked in</Button>
         
          </Flex>
          <Flex  direction = "column " rounded="xl"alignSelf='center' spacing='200px' mt={12} background="gray.200" h="30vh" w = '30vh' justify='flex-end'_hover={{background: 'green.400'}}>
            <Text color='gray.400' fontSize="2xl" fontWeight="semibold" pl={9}alignSelf='center'>Checkout more details about me on these</Text>
            
            <Text color='black' fontSize="2xl" fontWeight="semibold" pl={5}alignSelf='center' >Social Medias</Text>
            
          </Flex>
        </Flex>
        <Text mt={isNotSmallerScreen?'12':'16'} align='center'_hover={{color:'orange'}} fontStyle='italic' fontSize='2xl' fontWeight='semibold'>GIVE ME A CHANCE, I WILL CHANGE THE WORLD!</Text>
        <Text mt={isNotSmallerScreen?'12':'16'} align='left' fontStyle='Bold' fontSize='1xl' fontWeight='semibold'_hover={{color:'orange'}}>Contact me: Sathvik902@gmail.com</Text>
      </Box>
      </Flex>
    </div>
  )
}
