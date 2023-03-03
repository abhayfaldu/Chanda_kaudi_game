import React from 'react'
import {
 
  Box,
 
  Flex,
  Button,
  chakra,
  Image,
  Stack,
  Icon
 

} from "@chakra-ui/react";
import {FaDownload} from 'react-icons/fa'
import {Link } from 'react-router-dom'
  import logo1 from '../../Utils/gamepad.png'
import Navbar from './Navbar';

const HomePage = () => {
  return (
<>
{/* <Navbar/> */}

    <Flex
  direction={{
    base: "column",
    md: "row",
  }}
  _light={{
    bg: "brand.500",
  }}
  px={8}
  py={24}
  mx="auto"
>
  <Box
    w={{
      base: "full",
      md: 11 / 12,
      xl: 9 / 12,
    }}
    mx="auto"
    pr={{
      md: 20,
    }}
  >
    <chakra.h2
      fontSize={{
        base: "3xl",
        sm: "4xl",
      }}
      fontWeight="extrabold"
      lineHeight="shorter"
      color="blue.600"
      _dark={{
        color: "gray.100",
      }}
      mb={6}
    >
      <chakra.span display="block">Checkout the video</chakra.span>
      <chakra.span
        display="block"
        color="blue.600"
        _dark={{
          color: "gray.500",
        }}
      >
      Try Playing And Winning...
      </chakra.span>
    </chakra.h2>

    <chakra.p
      mb={6}
      fontSize={{
        base: "lg",
        md: "xl",
      }}
      color="blue.600"
      _dark={{
        color: "gray.300",
      }}
    >
      Click on the below Button 
     
    </chakra.p>
     

    <Icon boxSize={"70px"} as={FaDownload} />
    
    <Stack
      direction={{
        base: "column",
        sm: "row",
      }}
      mb={{
        base: 4,
        md: 8,
      }}
      spacing={2}
    >
     <Link to ="/gamecontrol">
      <Button ml={170} w={"100%"}  mt={30} size="lg" colorScheme='whatsapp'>Play Now</Button>
      </Link>
    </Stack>
  </Box>
  <Box
  
    w={{
      base: "full",
      md: 10 / 12,
    }}
    mx="auto"
    textAlign="center"
  >
  <Box  w={["250px","400px","450px","550px"]} > 
<iframe  width="100%" height="315" src="https://www.youtube.com/embed/hr8iI576BY8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
</Box> 
<Box   >
          <Image src={logo1} w="100%" h={["300px","300px","80%","100%"]} alt="game" borderRadius={20}/>
        </Box>
  </Box>
</Flex>
</>
  )
}

export default HomePage
