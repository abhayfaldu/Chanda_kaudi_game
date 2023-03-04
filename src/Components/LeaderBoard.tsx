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
  Button,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import {Link} from "react-router-dom"


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







// export interface PlayerType {
//   id: number;
//   name: String;
//   email: String;
//   status: String;
//   score: number;
// }
export interface PlayerType {
  id: number;
  name: String;
  email: number;
  status: number;
  score: String;
}





const LeaderBoard = ()=>{
    const [playersDetail, setplayerDetail] = useState<PlayerType[]>([]);

     useEffect(()=>{
       getData()
     },[]);

     const getData=async()=>{
        // try{
        //  let res = await axios.get("https://jsonplaceholder.typicode.com/users?limit=10");
          
          // setplayerDetail(mydata);
          // console.log("Players Data", mydata);

        // }
        // catch(e){
        //     console.log(e)
        // }  

        let gameboard = JSON.parse(localStorage.getItem("gameboard")!);
        let leaderboardArr = [];
        let ind = 1;
        for (let player in gameboard) {
          let curstatus = "Playing";
          let start = 0;
          let home = 0;
          for (let playcodi in gameboard[player]) {
              if (player === "player1") {
                if (gameboard[player][playcodi][0] === 2 && gameboard[player][playcodi][1] === 2) {
                  home++
                }
                else if(gameboard[player][playcodi][0] === 0 && gameboard[player][playcodi][1] === 0){
                  start++
                }
              }
              if (player === "player2") {
                if (gameboard[player][playcodi][0] === 2 && gameboard[player][playcodi][1] === 2) {
                  home++
                }
                else if(gameboard[player][playcodi][0] === 0 && gameboard[player][playcodi][1] === 4){
                  start++
                }
              }
              else if (player === "player3") {
                if (gameboard[player][playcodi][0] === 2 && gameboard[player][playcodi][1] === 2) {
                  home++
                }
                else if(gameboard[player][playcodi][0] === 4 && gameboard[player][playcodi][1] === 4){
                  start++
                }
              }
              else if (player === "player4") {
                if (gameboard[player][playcodi][0] === 2 && gameboard[player][playcodi][1] === 2) {
                  home++
                }
                else if(gameboard[player][playcodi][0] === 4 && gameboard[player][playcodi][1] === 0){
                  start++
                }
              }
            
          }
          if(home===4){
            curstatus = "Completed";
          }
          leaderboardArr.push({id:ind,name:player,email:start,status:home,score:curstatus})
          ind++
        }

        // console.log(leaderboardArr);
        setplayerDetail(leaderboardArr);
     }



    return (
      <>
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
                  {/* SL. NO. */}
                  PLAYER
                </Th>
                <Th
                  color={"black"}
                  fontSize={"17px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  {/* PLAYER'S NAME */}
                  START
                </Th>
                <Th
                  color={"black"}
                  fontSize={"17px"}
                  fontWeight={"bold"}
                  textAlign={"center"}
                >
                  {/* SCORE */}
                  HOME
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
              {playersDetail.map((el, index) => (
                <LeaderBoard_Row player={el} key={el.id} index={index + 1} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>


      <Box mt="20px">
        <Link to = "/">
        <Button color="black" bg="pink.900" >BACK TO HOME</Button></Link>
      </Box>
      </>
    );
}

export default LeaderBoard;