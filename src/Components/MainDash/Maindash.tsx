import React, { useEffect, useState } from 'react';
import Singlediv from '../SingleDiv/Singlediv';
import styles from "./maindash.module.css";
import { GameBoardtype as GameData } from "../../App";



interface CellData {
  player: number;
  codi: string;
  color: string;
  row: number;
  col: number;
}

const Maindash: React.FC = () => {
  const [state, setState] = useState<boolean>(true);
  const [chance, setChance] = useState<number>(1);
  const [dice, setDice] = useState<number>(0);
  const [board, setBoard] = useState<CellData[][][]>([[[]]]);

  useEffect(() => {
    let gameboard: GameData | null = JSON.parse(localStorage.getItem('gameboard') as string);
    

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
        if (gameboard?.player1?.b[0] == i && gameboard?.player1?.b[1] == j) {
          mat[i][j].push({ player: 1, codi: "b", color: "green", row: i, col: j })
        }
        if (gameboard?.player1?.c[0] == i && gameboard?.player1?.c[1] == j) {
          mat[i][j].push({ player: 1, codi: "c", color: "green", row: i, col: j })
        }
        if (gameboard?.player1?.d[0] == i && gameboard?.player1?.d[1] == j) {
          mat[i][j].push({ player: 1, codi: "d", color: "green", row: i, col: j })
        }
        if (gameboard?.player2?.a[0] === i && gameboard?.player2?.a[1] === j) {
          mat[i][j].push({ player: 2, codi: 'a', color: 'orange', row: i, col: j });
        }
        if (gameboard?.player2?.b[0] == i && gameboard?.player2?.b[1] == j) {
          mat[i][j].push({ player: 2, codi: "b", color: "orange", row: i, col: j })
        }
        if (gameboard?.player2?.c[0] == i && gameboard?.player2?.c[1] == j) {
          mat[i][j].push({ player: 2, codi: "c", color: "orange", row: i, col: j })
        }
        if (gameboard?.player2?.d[0] == i && gameboard?.player2?.d[1] == j) {
          mat[i][j].push({ player: 2, codi: "d", color: "orange", row: i, col: j })
        }
        if (gameboard?.player3?.a[0] === i && gameboard?.player3?.a[1] === j) {
          mat[i][j].push({ player: 3, codi: 'a', color: 'red', row: i, col: j });
        }
        if (gameboard?.player3?.b[0] == i && gameboard?.player3?.b[1] == j) {
          mat[i][j].push({ player: 3, codi: "b", color: "red", row: i, col: j })
        }
        if (gameboard?.player3?.c[0] == i && gameboard?.player3?.c[1] == j) {
          mat[i][j].push({ player: 3, codi: "c", color: "red", row: i, col: j })
        }
        if (gameboard?.player3?.d[0] == i && gameboard?.player3?.d[1] == j) {
          mat[i][j].push({ player: 3, codi: "d", color: "red", row: i, col: j })
        }
        if (gameboard?.player4?.a[0] === i && gameboard?.player4?.a[1] === j) {
          mat[i][j].push({ player: 4, codi: 'a', color: 'blue', row: i, col: j });
        }
        if (gameboard?.player4?.b[0] == i && gameboard?.player4?.b[1] == j) {
          mat[i][j].push({ player: 4, codi: "b", color: "blue", row: i, col: j })
        }
        if (gameboard?.player4?.c[0] == i && gameboard?.player4?.c[1] == j) {
          mat[i][j].push({ player: 4, codi: "c", color: "blue", row: i, col: j })
        }
        if (gameboard?.player4?.d[0] == i && gameboard?.player4?.d[1] == j) {
          mat[i][j].push({ player: 4, codi: "d", color: "blue", row: i, col: j })
        }
      }
    }
    setBoard(mat);
  }, [state]);

  const Generateno = () => {
    const random = Math.ceil(Math.random() * 5);
    setDice(random);
  
  };

  const RestartGame = () => {
    let gameboard : GameData = {
        player1 : {
          a : [0,0],
          b : [0,0],
          c : [0,0],
          d : [0,0],
        },
        player2 : {
          a : [0,4],
          b : [0,4],
          c : [0,4],
          d : [0,4],
        },
        player3 : {
          a : [4,4],
          b : [4,4],
          c : [4,4],
          d : [4,4],
        },
        player4 : {
          a : [4,0],
          b : [4,0],
          c : [4,0],
          d : [4,0],
        },
      }
    
      localStorage.setItem("gameboard",JSON.stringify(gameboard));
    setDice(0)
    setChance(1)
    setState(!state)
}


  return (
    <div className={styles.main_div_gameboard_outerdiv}>
    <div className={styles.main_div_gameboard}>
        {board.map((el,ri)=>{
           return el.map((cel,ci)=>{
           
            return <Singlediv key={Date.now()+Math.random()*7} alldata={[...cel]} dicefun={setDice}  stfun={setState} st={state} rowind={ri} colind={ci} khiladifun={setChance} khiladi={chance} dicevalue={dice} />
            })
        })}
    </div>

    <div>
        <div>Player {chance}</div>
        <div>{dice}</div>
        <button onClick={Generateno}>generate number</button>
        <button onClick={RestartGame}>Restart</button>
    </div>
    </div>
  );
};

export default Maindash;








