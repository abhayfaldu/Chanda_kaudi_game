import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";


import { useState, useEffect } from "react";
import LeaderBoard_Row from "./LeaderBoard_Row";

const mydata = [
  {
    id: 1,
    name: "Rishav",
    email: "chak@gmail.com",
    status: "Winner",
    score:3
  },
  { id: 2, name: "Rohan", email: "rohan@gmail.com", status: "Loser", score:4 },
  {
    id: 3,
    name: "Deepak",
    email: "deep@gmail.com",
    status: "Winner",
    score:2 },
];







export interface PlayerType {
  id: number;
  name: String;
  email: String;
  status: String;
  score: number;
}






const LeaderBoard = ()=>{
    const [playersDetail, setplayerDetail] = useState<PlayerType[]>([]);

     useEffect(()=>{
       getData()
     },[]);

     const getData=async()=>{
        try{
         let res = await axios.get("https://jsonplaceholder.typicode.com/users?limit=10");
          
          setplayerDetail(mydata);
          console.log("Players Data", mydata);

        }
        catch(e){
            console.log(e)
        }  
     }



    return (
      <Box
        w={{ base: "100%", md: "80%", lg: "50%" }}
        h={"fit-content"}
        m={"auto"}
        mt={{ base: "50px", md: "60px", lg: "120px" }}
        bg={"#eae3e3"}
        borderRadius={"7px"}
        border={"1px solid grey"}
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          gap={"20px"}
          p={"20px"}
        >
          <Image
            w={"40px"}
            h={"40px"}
            borderRadius={"50%"}
            src={
              "https://cdn.dribbble.com/users/48190/screenshots/3825216/leaderboard-symbol-svg.gif"
            }
            alt={"image"}
          />
          <Heading color={"#5426b7"}>Leaderboard</Heading>
        </Flex>
        <TableContainer border={"0px solid red"} w={{base:'100%'}}>
          <Table variant="striped" colorScheme="teal">
            <Thead bg={"yellow.500"}>
              <Tr>
                <Th
                  color={"black"}
                  fontSize={"17px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  SL. NO.
                </Th>
                <Th
                  color={"black"}
                  fontSize={"17px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  PLAYER'S NAME
                </Th>
                <Th
                  color={"black"}
                  fontSize={"17px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  SCORE
                </Th>
                <Th
                  color={"black"}
                  fontSize={"17px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  STATUS
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {mydata.map((el, index) => (
                <LeaderBoard_Row player={el} key={el.id} index={index + 1} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    );
}

export default LeaderBoard;