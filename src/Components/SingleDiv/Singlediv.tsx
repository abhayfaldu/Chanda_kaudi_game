import { url } from 'inspector';
import React, { useEffect, useState } from 'react';
import styles from "./singlediv.module.css";

interface SingledivProps {
  alldata: { player: number, codi: string, row: number, col: number, color: string }[],
  dicefun: (val: number) => void;
  rowind: number,
  colind: number,
  khiladi: number,
  khiladifun: any;
  dicevalue: number,
  stfun: (value: boolean) => void,
  st: boolean
}





const Singlediv: React.FC<SingledivProps> = ({ alldata, dicefun, rowind, colind, khiladi, khiladifun, dicevalue, stfun, st }) => {

const HomeStyle = {
  backgroundImage: `url(${
    rowind == 2 && colind == 2
      ? `https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-03-03/HomeIcon_498245.png`
      : "none"
  })`,
  backgroundPosition: "center",
  backgroundSize: "cover",
};

  const ChanceofPlayer = (wplaying: number, wcodi: number, diceval: number, codival: string, rowpos: number, colpos: number) => {
    if (diceval === 0) {
      return;
    }
    if (rowpos === 2 && colpos === 2) {
      return
    }

    if (khiladi === 4) {
      khiladifun(1)
    }
    else {
      khiladifun(khiladi + 1)
    }


    let gameboard = JSON.parse(localStorage.getItem("gameboard")!);
    if(wplaying===1 && wcodi===1){
      let rval = rowpos;
      let cval = colpos;
      let matrix = new Array(5);
                for(let i=0;i<5;i++){
                  matrix[i] = new Array(5).fill(null)
                }
                let top = 0;
                let left = 0;
                let right = 4;
                let bottom = 4;
                let till = true;
                while(top<=bottom && left<=right && till){
                    for(let i=left;i<=right&&till;i++){
                      if(rval===2 && cval===2 && diceval>0){
                          rval = rowpos;
                          cval = colpos;
                          till = false;
                      }
                      if(rval===top && cval===i && i===right){
                         rval++
                         diceval--
                      }
                      if(rval===top && cval===i && i<right){
                          cval++;
                          diceval--
                      }
                      if(diceval===0){
                          till = false;
                      }
                  }
                  top++;
                  for(let i=top;i<=bottom&&till;i++){
                      if(rval===2 && cval===2 && diceval>0){
                          rval = rowpos;
                          cval = colpos;
                          till = false;
                      }
                      if(rval===i && cval===right && i===bottom){
                          cval--
                          diceval--
                      }
                      if(rval===i && cval===right && i<bottom){
                          rval++;
                          diceval--
                      }
                      if(diceval===0){
                          till = false;
                      }
                  }
                  right--
                  for(let i=right;i>=left&&till;i--){
                      if(rval===2 && cval===2 && diceval>0){
                          rval = rowpos;
                          cval = colpos;
                          till = false;
                      }
                      if(rval===bottom && cval===i && i===left){
                          rval--
                          diceval--
                      }
                      if(rval===bottom && cval===i && i>left){
                           cval--;
                           diceval--
                       }
                       if(diceval===0){
                           till = false;
                       }
                    }
                    bottom--;
                    for(let i=bottom;i>=top&&till;i--){
                      if(rval===2 && cval===2 && diceval>0){
                          rval = rowpos;
                          cval = colpos;
                          till = false;
                      }
                      if(rval===i && cval===left && i===top){
                          cval++
                         diceval--
                      }
                      if(rval===i && cval===left && i>top){
                          rval--;
                          diceval--
                      }
                      if(diceval===0){
                          till = false;
                      }
                    }
                    left++;
                }

                if(rval!==0 || cval!==0){
                  if(rval!==0 || cval!==4){
                      if(rval!==4 || cval!==4){
                          if(rval!==4 || cval!==0){
                              if(rval!==2 || cval!==2){
                                  for(let player in gameboard){
                                      if(player==="player1"){
                                          continue;
                                      }
                                      for(let playcodi in gameboard[player]){
                                            if(gameboard[player][playcodi][0]===rval && gameboard[player][playcodi][1]===cval){
                                              khiladifun((prev:number) => prev===1 ? 4 : prev-1);
                                               if(player==="player2"){
                                                  gameboard[player][playcodi][0] = 0;
                                                  gameboard[player][playcodi][1] = 4;
                                               }
                                               else if(player==="player3"){
                                                  gameboard[player][playcodi][0] = 4;
                                                  gameboard[player][playcodi][1] = 4;
                                               }
                                               else if(player==="player4"){
                                                  gameboard[player][playcodi][0] = 4;
                                                  gameboard[player][playcodi][1] = 0;
                                               }
                                            }
                                      }
                                  }
                              }
                          }
                      }
                  }    
              }

                if(codival==="a"){
                  gameboard.player1.a = [rval,cval];
                  localStorage.setItem("gameboard",JSON.stringify(gameboard));
                  stfun(!st)
                  dicefun(0)
                }
                else if(codival==="b"){
                  gameboard.player1.b = [rval,cval];
                  localStorage.setItem("gameboard",JSON.stringify(gameboard));
                  stfun(!st)
                  dicefun(0)
                }
                else if(codival==="c"){
                  gameboard.player1.c = [rval,cval];
                  localStorage.setItem("gameboard",JSON.stringify(gameboard));
                  stfun(!st)
                  dicefun(0)
                }
                else if(codival==="d"){
                  gameboard.player1.d = [rval,cval];
                  localStorage.setItem("gameboard",JSON.stringify(gameboard));
                  stfun(!st)
                  dicefun(0)
                }
      
     }
    else if (wplaying === 2 && wcodi === 2) { 
      let rval = rowpos;
                let cval = colpos;
                let matrix = new Array(5);
                          for(let i=0;i<5;i++){
                            matrix[i] = new Array(5).fill(null)
                          }
                          let top = 0;
                          let left = 0;
                          let right = 4;
                          let bottom = 4;
                          let till = true;
                          while(top<=bottom && left<=right && till){
                              
                            for(let i=top;i<=bottom&&till;i++){
                                if(rval===2 && cval===2 && diceval>0){
                                    rval = rowpos;
                                    cval = colpos;
                                    till = false;
                                }
                                if(rval===i && cval===right && i===bottom){
                                    cval--
                                    diceval--
                                }
                                if(rval===i && cval===right && i<bottom){
                                    rval++;
                                    diceval--
                                }
                                if(diceval===0){
                                    till = false;
                                }
                            }
                            right--
                            for(let i=right;i>=left&&till;i--){
                                if(rval===2 && cval===2 && diceval>0){
                                    rval = rowpos;
                                    cval = colpos;
                                    till = false;
                                }
                                if(rval===bottom && cval===i && i===left){
                                    rval--
                                    diceval--
                                }
                                if(rval===bottom && cval===i && i>left){
                                     cval--;
                                     diceval--
                                 }
                                 if(diceval===0){
                                     till = false;
                                 }
                              }
                              bottom--;
                              for(let i=bottom;i>=top&&till;i--){
                                if(rval===2 && cval===2 && diceval>0){
                                    rval = rowpos;
                                    cval = colpos;
                                    till = false;
                                }
                                if(rval===i && cval===left && i===top){
                                    cval++
                                   diceval--
                                }
                                if(rval===i && cval===left && i>top){
                                    rval--;
                                    diceval--
                                }
                                if(diceval===0){
                                    till = false;
                                }
                              }
                              left++;
                              for(let i=left;i<=right&&till;i++){
                                if(rval===2 && cval===2 && diceval>0){
                                    rval = rowpos;
                                    cval = colpos;
                                    till = false;
                                }
                                if(rval===top && cval===i && i===right){
                                   rval++
                                   diceval--
                                }
                                if(rval===top && cval===i && i<right){
                                    cval++;
                                    diceval--
                                }
                                if(diceval===0){
                                    till = false;
                                }
                            }
                            top++;
                          }

                          if(rval!==0 || cval!==0){
                            if(rval!==0 || cval!==4){
                                if(rval!==4 || cval!==4){
                                    if(rval!==4 || cval!==0){
                                        if(rval!==2 || cval!==2){
                                            for(let player in gameboard){
                                                if(player==="player2"){
                                                    continue;
                                                }
                                                for(let playcodi in gameboard[player]){
                                                      if(gameboard[player][playcodi][0]===rval && gameboard[player][playcodi][1]===cval){
                                                        khiladifun((prev:number) => prev===1 ? 4 : prev-1);
                                                         if(player==="player1"){
                                                            gameboard[player][playcodi][0] = 0;
                                                            gameboard[player][playcodi][1] = 0;
                                                         }
                                                         else if(player==="player3"){
                                                            gameboard[player][playcodi][0] = 4;
                                                            gameboard[player][playcodi][1] = 4;
                                                         }
                                                         else if(player==="player4"){
                                                            gameboard[player][playcodi][0] = 4;
                                                            gameboard[player][playcodi][1] = 0;
                                                         }
                                                      }
                                                }
                                            }
                                        }
                                    }
                                }
                            }    
                        }


                          if(codival==="a"){
                            gameboard.player2.a = [rval,cval];
                            localStorage.setItem("gameboard",JSON.stringify(gameboard));
                            stfun(!st)
                            dicefun(0)
                          }
                          else if(codival==="b"){
                            gameboard.player2.b = [rval,cval];
                            localStorage.setItem("gameboard",JSON.stringify(gameboard));
                            stfun(!st)
                            dicefun(0)
                          }
                          else if(codival==="c"){
                            gameboard.player2.c = [rval,cval];
                            localStorage.setItem("gameboard",JSON.stringify(gameboard));
                            stfun(!st)
                            dicefun(0)
                          }
                          else if(codival==="d"){
                            gameboard.player2.d = [rval,cval];
                            localStorage.setItem("gameboard",JSON.stringify(gameboard));
                            stfun(!st)
                            dicefun(0)
                          }
    }
    else if (wplaying === 3 && wcodi === 3) {
      let rval = rowpos;
      let cval = colpos;
      let matrix = new Array(5);
                for(let i=0;i<5;i++){
                  matrix[i] = new Array(5).fill(null)
                }
                let top = 0;
                let left = 0;
                let right = 4;
                let bottom = 4;
                let till = true;
                while(top<=bottom && left<=right && till){
                  for(let i=right;i>=left&&till;i--){
                      if(rval===2 && cval===2 && diceval>0){
                          rval = rowpos;
                          cval = colpos;
                          till = false;
                      }
                      if(rval===bottom && cval===i && i===left){
                          rval--
                          diceval--
                      }
                      if(rval===bottom && cval===i && i>left){
                           cval--;
                           diceval--
                       }
                       if(diceval===0){
                           till = false;
                       }
                    }
                    bottom--;
                    for(let i=bottom;i>=top&&till;i--){
                      if(rval===2 && cval===2 && diceval>0){
                          rval = rowpos;
                          cval = colpos;
                          till = false;
                      }
                      if(rval===i && cval===left && i===top){
                          cval++
                         diceval--
                      }
                      if(rval===i && cval===left && i>top){
                          rval--;
                          diceval--
                      }
                      if(diceval===0){
                          till = false;
                      }
                    }
                    left++;
                    for(let i=left;i<=right&&till;i++){
                      if(rval===2 && cval===2 && diceval>0){
                          rval = rowpos;
                          cval = colpos;
                          till = false;
                      }
                      if(rval===top && cval===i && i===right){
                         rval++
                         diceval--
                      }
                      if(rval===top && cval===i && i<right){
                          cval++;
                          diceval--
                      }
                      if(diceval===0){
                          till = false;
                      }
                  }
                  top++;
                  for(let i=top;i<=bottom&&till;i++){
                      if(rval===2 && cval===2 && diceval>0){
                          rval = rowpos;
                          cval = colpos;
                          till = false;
                      }
                      if(rval===i && cval===right && i===bottom){
                          cval--
                          diceval--
                      }
                      if(rval===i && cval===right && i<bottom){
                          rval++;
                          diceval--
                      }
                      if(diceval===0){
                          till = false;
                      }
                  }
                  right--
                }


                if(rval!==0 || cval!==0){
                  if(rval!==0 || cval!==4){
                      if(rval!==4 || cval!==4){
                          if(rval!==4 || cval!==0){
                              if(rval!==2 || cval!==2){
                                  for(let player in gameboard){
                                      if(player==="player3"){
                                          continue;
                                      }
                                      for(let playcodi in gameboard[player]){
                                            if(gameboard[player][playcodi][0]===rval && gameboard[player][playcodi][1]===cval){
                                              khiladifun((prev:number) => prev===1 ? 4 : prev-1);
                                               if(player==="player2"){
                                                  gameboard[player][playcodi][0] = 0;
                                                  gameboard[player][playcodi][1] = 4;
                                               }
                                               else if(player==="player1"){
                                                  gameboard[player][playcodi][0] = 0;
                                                  gameboard[player][playcodi][1] = 0;
                                               }
                                               else if(player==="player4"){
                                                  gameboard[player][playcodi][0] = 4;
                                                  gameboard[player][playcodi][1] = 0;
                                               }
                                            }
                                      }
                                  }
                              }
                          }
                      }
                  }    
              }

                if(codival==="a"){
                  gameboard.player3.a = [rval,cval];
                  localStorage.setItem("gameboard",JSON.stringify(gameboard));
                  stfun(!st)
                  dicefun(0)
                }
                else if(codival==="b"){
                  gameboard.player3.b = [rval,cval];
                  localStorage.setItem("gameboard",JSON.stringify(gameboard));
                  stfun(!st)
                  dicefun(0)
                }
                else if(codival==="c"){
                  gameboard.player3.c = [rval,cval];
                  localStorage.setItem("gameboard",JSON.stringify(gameboard));
                  stfun(!st)
                  dicefun(0)
                }
                else if(codival==="d"){
                  gameboard.player3.d = [rval,cval];
                  localStorage.setItem("gameboard",JSON.stringify(gameboard));
                  stfun(!st)
                  dicefun(0)
                }
     }
    else if (wplaying === 4 && wcodi === 4) { 
      let rval = rowpos;
                let cval = colpos;
                let matrix = new Array(5);
                          for(let i=0;i<5;i++){
                            matrix[i] = new Array(5).fill(null)
                          }
                          let top = 0;
                          let left = 0;
                          let right = 4;
                          let bottom = 4;
                          let till = true;
                          while(top<=bottom && left<=right && till){
                           
                              for(let i=bottom;i>=top&&till;i--){
                                if(rval===2 && cval===2 && diceval>0){
                                    rval = rowpos;
                                    cval = colpos;
                                    till = false;
                                }
                                if(rval===i && cval===left && i===top){
                                    cval++
                                   diceval--
                                }
                                if(rval===i && cval===left && i>top){
                                    rval--;
                                    diceval--
                                }
                                if(diceval===0){
                                    till = false;
                                }
                              }
                              left++;
                              for(let i=left;i<=right&&till;i++){
                                if(rval===2 && cval===2 && diceval>0){
                                    rval = rowpos;
                                    cval = colpos;
                                    till = false;
                                }
                                if(rval===top && cval===i && i===right){
                                   rval++
                                   diceval--
                                }
                                if(rval===top && cval===i && i<right){
                                    cval++;
                                    diceval--
                                }
                                if(diceval===0){
                                    till = false;
                                }
                            }
                            top++;
                            for(let i=top;i<=bottom&&till;i++){
                                if(rval===2 && cval===2 && diceval>0){
                                    rval = rowpos;
                                    cval = colpos;
                                    till = false;
                                }
                                if(rval===i && cval===right && i===bottom){
                                    cval--
                                    diceval--
                                }
                                if(rval===i && cval===right && i<bottom){
                                    rval++;
                                    diceval--
                                }
                                if(diceval===0){
                                    till = false;
                                }
                            }
                            right--
                            for(let i=right;i>=left&&till;i--){
                                if(rval===2 && cval===2 && diceval>0){
                                    rval = rowpos;
                                    cval = colpos;
                                    till = false;
                                }
                                if(rval===bottom && cval===i && i===left){
                                    rval--
                                    diceval--
                                }
                                if(rval===bottom && cval===i && i>left){
                                     cval--;
                                     diceval--
                                 }
                                 if(diceval===0){
                                     till = false;
                                 }
                              }
                              bottom--;
                          }


                          if(rval!==0 || cval!==0){
                            if(rval!==0 || cval!==4){
                                if(rval!==4 || cval!==4){
                                    if(rval!==4 || cval!==0){
                                        if(rval!==2 || cval!==2){
                                            for(let player in gameboard){
                                                if(player==="player4"){
                                                    continue;
                                                }
                                                for(let playcodi in gameboard[player]){
                                                      if(gameboard[player][playcodi][0]===rval && gameboard[player][playcodi][1]===cval){
                                                        khiladifun((prev:number) => prev===1 ? 4 : prev-1);
                                                         if(player==="player2"){
                                                            gameboard[player][playcodi][0] = 0;
                                                            gameboard[player][playcodi][1] = 4;
                                                         }
                                                         else if(player==="player3"){
                                                            gameboard[player][playcodi][0] = 4;
                                                            gameboard[player][playcodi][1] = 4;
                                                         }
                                                         else if(player==="player1"){
                                                            gameboard[player][playcodi][0] = 0;
                                                            gameboard[player][playcodi][1] = 0;
                                                         }
                                                      }
                                                }
                                            }
                                        }
                                    }
                                }
                            }    
                        }

                          if(codival==="a"){
                            gameboard.player4.a = [rval,cval];
                            localStorage.setItem("gameboard",JSON.stringify(gameboard));
                            stfun(!st)
                            dicefun(0)
                          }
                          else if(codival==="b"){
                            gameboard.player4.b = [rval,cval];
                            localStorage.setItem("gameboard",JSON.stringify(gameboard));
                            stfun(!st)
                            dicefun(0)
                          }
                          else if(codival==="c"){
                            gameboard.player4.c = [rval,cval];
                            localStorage.setItem("gameboard",JSON.stringify(gameboard));
                            stfun(!st)
                            dicefun(0)
                          }
                          else if(codival==="d"){
                            gameboard.player4.d = [rval,cval];
                            localStorage.setItem("gameboard",JSON.stringify(gameboard));
                            stfun(!st)
                            dicefun(0)
                          }
    }
  }

  return (
    <div>
      <div style={HomeStyle} className={styles.singlediv_box}>
        {alldata.length !== 0 ?
          alldata.map((el, i) => {
            return <button key={i} onClick={() => ChanceofPlayer(khiladi, el.player, dicevalue, el.codi, el.row, el.col)} style={{ backgroundColor: `${el.color}` }} className={styles.Singlediv_codi}></button>
          })
          : null}
      </div>
    </div>
  )
}

export default Singlediv














