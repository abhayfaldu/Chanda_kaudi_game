import { url } from 'inspector';
import React, { useEffect, useState } from 'react';
import styles from "./singlediv.module.css";

interface SingledivProps {
alldata: { player: number, codi: string, row: number, col: number, color: string }[],
rowind: number,
colind: number,
khiladi: number,
dicevalue: number,
stfun: (value: boolean) => void,
st: boolean
}





const Singlediv: React.FC<SingledivProps> = ({ alldata, rowind, colind, khiladi, dicevalue, stfun, st }) => {

const HomeStyle = {
  backgroundImage: `url(${
    rowind == 2 && colind == 2
      ? `https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-03/HomeIcon_498245.png`
      : "none"
  })`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const RedHouseStyle = {
  backgroundImage: `url(${
    rowind == 2 && colind == 2
      ? `https://www.freeiconspng.com/thumbs/homepage-icon-png/home-page-icon-21.png`
      : "none"
  })`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};



const ChanceofPlayer = (wplaying: number, wcodi: number, diceval: number, codival: string, rowpos: number, colpos: number) => {
    let gameboard = JSON.parse(localStorage.getItem("gameboard")!);
if (wplaying === 1 && wcodi === 1) {
  let rval = rowpos;
  let cval = colpos;
  let matrix = new Array(5);
  for (let i = 0; i < 5; i++) {
    matrix[i] = new Array(5).fill(null)
  }
  let top = 0;
  let left = 0;
  let right = 4;
  let bottom = 4;
  let ir = 0;
  let jc = 0;
  let till = true;
  while (top <= bottom && left <= right && till) {
    for (let i = left; i <= right && till; i++) {
      if (rval === top && cval === i && i === right) {
        rval++
        diceval--
      }
      if (rval === top && cval === i && i < right) {
        cval++;
        diceval--
      }
      if (diceval === 0) {
        till = false;
      }
    }
    top++;
    for (let i = top; i <= bottom && till; i++) {
      if (rval === i && cval === right && i === bottom) {
        cval--
        diceval--
      }
      if (rval === i && cval === right && i < bottom) {
        rval++;
        diceval--
      }
      if (diceval === 0) {
        till = false;
      }
    }
    right--
    for (let i = right; i >= left && till; i--) {
      if (rval === bottom && cval === i && i === left) {
        rval--
        diceval--
      }
      if (rval === bottom && cval === i && i > left) {
        cval--;
        diceval--
      }
      if (diceval === 0) {
        till = false;
      }
    }
    bottom--;
    for (let i = bottom; i >= top && till; i--) {
      if (rval === i && cval === left && i === top) {
        cval++
        diceval--
      }
      if (rval === i && cval === left && i > top) {
        rval--;
        diceval--
      }
      if (diceval === 0) {
        till = false;
      }
    }
    left++;
  }
  if (codival === "a") {
    gameboard.player1.a = [rval, cval];
    localStorage.setItem("gameboard", JSON.stringify(gameboard));
    stfun(!st)
  }

}
else if (wplaying === 2 && wcodi === 2) { }
else if(wplaying===3 && wcodi===3){}
else if(wplaying===4 && wcodi===4){}
}
 console.log(
   "alldata",
   alldata,
   "rowind",
   rowind,
   "colind",
   colind,
   "khiladi",
   khiladi,
   "dicevalue",
   dicevalue,
   "stfun",
   stfun,
   "st",
   st
 );
return (
  <div>
    <div style={HomeStyle} className={styles.singlediv_box}>
      {alldata.length !== 0
        ? alldata.map((el, i) => {
            return (
              <button
                onClick={() =>
                  ChanceofPlayer(
                    khiladi,
                    el.player,
                    dicevalue,
                    el.codi,
                    el.row,
                    el.col
                  )
                }
                style={{ backgroundColor: `${el.color}` }}
                className={styles.Singlediv_codi}
              ></button>
            );
          })
        : null}
    </div>
  </div>
);
}

export default Singlediv
