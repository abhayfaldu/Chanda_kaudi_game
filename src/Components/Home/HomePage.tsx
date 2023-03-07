import React, { useEffect, useState } from 'react'

import {
 
  Box,
 Text,
  Flex,
  Button,
  chakra,
  Image,
  Stack,
  Icon,
  Heading,
  Grid,
  GridItem
 

} from "@chakra-ui/react";
import {FaDownload} from 'react-icons/fa'
import {Link } from 'react-router-dom'
  import logo1 from '../../Utils/gamepad.png'
import Navbar from './Navbar';

const HomePage = () => {
  const slides = [
    {
      img: "https://www.wechoose.in/wp-content/uploads/2018/11/Ashta-Chamma2.jpg",
    },
    {
      img: "https://www.wechoose.in/wp-content/uploads/2018/11/Ashta-Chamma.jpg",
    },
    {
      img: "https://www.wechoose.in/wp-content/uploads/2018/11/Ashta-Chamma1.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";
  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
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
     <Link to ="/game">
      <Button ml={["0","20","30","50"]} w={["200px","200px","200px","500px"]}  mt={30} size="lg" colorScheme='whatsapp'>Play Now</Button>
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
<Box >

<Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  as="em"
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'

>
  Hello Here are the Rules
</Text>
</Box>
<Flex
      w="full"
     
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden">
        <Flex pos="relative" h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
                whiteSpace="nowrap"
              >
                {/* {sid + 1} / {slidesCount} */}
              </Text>
              <Image
              m="auto"
                src={slide.img}
                alt="carousel image"
                w="70%"
                h="500px"
             
              />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
    <Box pl="50px" pr="50px" mb="100px">
 <Box w="100%" borderRadius="10px"   bgGradient='linear(red.100 0%, orange.100 25%, yellow.100 50%)'_dark={{
        bg: "#3e3e3e",
       }}  p="11" >
  <Heading  fontFamily="serif" as='u'>About the Game </Heading>
  <Grid mt="20px" templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(3, 1fr)"]} gap={6}>
  <GridItem>
  <Text fontFamily="serif" fontSize="20px" lineHeight="40px" >
  1.⭕CHANDA KAUDI ,also known as Chaupar or Chaubara, is a traditional Indian board game that has been enjoyed enjoyed in India for centuries, and it is still played by many people today.
  </Text>
  </GridItem>
  <GridItem>
  <Text fontFamily="serif" fontSize="20px" lineHeight="40px"  >
  2.⭕The game is similar to Pachisi and Ludo, and it is usually played on a wooden board with 5x5 or 7x7 grids.The board has a central square known as the "Chaubara," which means "four houses."

  </Text>
  </GridItem>
  <GridItem>
  <Text  fontFamily="serif"fontSize="20px" lineHeight="40px" >
  3.⭕The game is played with a board that has four colored squares, each with a set of four houses, and a central cross-shaped square that serves as a starting and finishing point for each player's pieces. 

  </Text>
  </GridItem>
  <GridItem>
  <Text fontFamily="serif" fontSize="20px" lineHeight="40px" >
  
4.⭕The game is usually played by two to four players, each of whom has four pieces or pawns that they move around the board according to the roll of a dice.

  </Text>
  </GridItem>
  <GridItem>
  <Text fontFamily="serif" fontSize="20px"  lineHeight="40px" >
  5.⭕The objective of the game is to move all four of your pieces from the starting point to the finishing point, using a set of dice to determine how many spaces you can move on each turn. The first player to move all of their pieces to the finishing point wins the game.

  </Text>
  </GridItem>

  <GridItem>
  <Text lineHeight="40px"  fontFamily="serif" fontSize="20px"  >

  6.⭕This is a multiplayer game with people from around the world. Additionally, players can connect with each other by real time chats while playing the game together.

  </Text>
  </GridItem>
  </Grid>
  <Box mt="100px" lineHeight="50px" >
  <Heading fontFamily="serif" as='u'>About the Rules </Heading>
  <Box pl="20px" mt="50px" mb="50px"  w="100%" h="auto" >
    <Text align="left"  fontFamily="serif" fontSize="20px" >1.The maximum number of user that can play at a time are 4.
    </Text>
    <Text align="left"  fontFamily="serif"fontSize="20px" >2.When ever a user roles a dice the maximum number of value he/she receives is 5 and minimum is 1. 
    </Text>
    <Text align="left"  fontFamily="serif"fontSize="20px" >3.When ever a user kills a player's pawns he gets a bonus change to role the dice again.
    </Text>
    <Text align="left"  fontFamily="serif"fontSize="20px" >4. One single pawns can kill multiple pawns irrespective of number of pawns in one single box and all killed pawns goes to the start point 
    </Text>
    <Text align="left"  fontFamily="serif"fontSize="20px" >5.Pawns will be moving automatically according to the arrow marks in the board
    </Text>
    <Text align="left"  fontFamily="serif"fontSize="20px" >6.The player who takes  all 4 pawns in the home box first wins the game.  Rest can continue the game for 2 and 3 rank
    </Text>
    <Text align="left"  fontFamily="serif"fontSize="20px" >7.Every Playes start point is the save zone for all the player no any opponent can kill the pawns.  
    </Text>

  </Box>
  </Box>

  
 </Box>
 
 </Box>


</>
  )
}

export default HomePage