import React, { useEffect, useState } from 'react';
import Singlediv from '../SingleDiv/Singlediv';
import styles from "./maindash.module.css";
import { Flex, Image, Box, Heading } from "@chakra-ui/react";

interface GameData {
  player1: { a: number[] };
  player2: { a: number[] };
  player3: { a: number[] };
  player4: { a: number[] };
}


interface CellData {
player: number;
codi: string;
color: string;
row: number;
col: number;
}

const Maindash: React.FC = () => {
const [state, setState] = useState<boolean>(true);
const [chance, setChance] = useState<number>(0);
const [dice, setDice] = useState<number>(0);
const [board, setBoard] = useState<CellData[][][]>([[[]]]);

useEffect(() => {
  let gameboard: GameData | null = JSON.parse(localStorage.getItem('gameboard') as string);
  console.log(gameboard);
  
  const mat: CellData[][][] = new Array(5);
  for (let i = 0; i < 5; i++) {
    mat[i] = new Array(5).fill(null);
  }
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      mat[i][j] = new Array();
    }
  }

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (gameboard?.player1?.a[0] === i && gameboard?.player1?.a[1] === j) {
        mat[i][j].push({ player: 1, codi: 'a', color: 'green', row: i, col: j });
      }
      if (gameboard?.player2?.a[0] === i && gameboard?.player2?.a[1] === j) {
        mat[i][j].push({ player: 2, codi: 'a', color: 'orange', row: i, col: j });
      }
      if (gameboard?.player3?.a[0] === i && gameboard?.player3?.a[1] === j) {
        mat[i][j].push({ player: 3, codi: 'a', color: 'red', row: i, col: j });
      }
      if (gameboard?.player4?.a[0] === i && gameboard?.player4?.a[1] === j) {
        mat[i][j].push({ player: 4, codi: 'a', color: 'blue', row: i, col: j });
      }
    }
  }
  setBoard(mat);
}, [state]);

const Generateno = () => {
const random = Math.ceil(Math.random() * 5);
setDice(random);
if (chance === 4) {
setChance(1);
} else {
setChance(chance + 1);
}
};

return (
  <div className={styles.main_div_gameboard_outerdiv}>
    <Flex align={"center"} justify={"center"} gap={"10px"}>
      <Image
        w={"35px"}
        h={"35px"}
        boxShadow="rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
        borderRadius={"50%"}
        src="https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-03/Gaming%20logo1_573500.png"
        alt="Kaudi"
      />
      <h1 className={styles.heading}>Ashta Chamma</h1>
    </Flex>

    <div className={styles.main_div_gameboard}>
      {board.map((el, ri) => {
        return el.map((cel, ci) => {
          return (
            <Singlediv
              alldata={[...cel]}
              stfun={setState}
              st={state}
              rowind={ri}
              colind={ci}
              khiladi={chance}
              dicevalue={dice}
            />
          );
        });
      })}
    </div>
    <Flex
      border={"0px solid black"}
      align={"center"}
      justify={"space-between"}
      h={"60px"}
      p={4}
      m={"auto"}
      mt={"10px"}
      w={"80%"}
      borderRadius="10px"
    >
      <Box w={"fit-content"}>
        {" "}
        <Heading
          fontFamily={"Helvetica, Arial, Sans-Serif"}
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
          color={"#22eaf4"}
          fontSize={{ base: "20px", md: "30px", lg: "35px" }}
          fontStyle={"italic"}
        >
          Player - {chance}
        </Heading>
      </Box>
      <Flex
        w={"50%"}
        border={"0px solid white"}
        align={"center"}
        justify={"space-between"}
      >
        <Box
          color={"black"}
          fontSize={{ base: "25px", md: "30px", lg: "35px" }}
          fontWeight={"bold"}
          bg={"yellow"}
          w={{ base: "40px", md: "60px", lg: "60px" }}
          borderRadius={"8px"}
        >
          {dice}
        </Box>
        <button className={styles.Throwbtn} onClick={Generateno}>
          THROW
        </button>
      </Flex>
    </Flex>
  </div>
);
};

export default Maindash;