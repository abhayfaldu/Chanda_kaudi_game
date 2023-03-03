import React, { useEffect, useState } from 'react';
import Singlediv from '../SingleDiv/Singlediv';
import styles from "./maindash.module.css";

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
<div className={styles.main_div_gameboard}>
{board.map((el, ri) => {
return el.map((cel, ci) => {
return <Singlediv alldata={[...cel]} stfun={setState} st={state} rowind={ri} colind={ci} khiladi={chance} dicevalue={dice} />;
});
})}
</div>
<div>
    <div>Player {chance}</div>
    <div>{dice}</div>
    <button onClick={Generateno}>generate number</button>
  </div>
</div>
);
};

export default Maindash;