import React from 'react'
import {
  Tr,
  Td,
} from "@chakra-ui/react";
import { PlayerType } from './LeaderBoard';

export interface LeaderBoard_Row_Type {
  player: PlayerType;
  index:number,
}

const LeaderBoard_Row = (props: LeaderBoard_Row_Type) => {
  const { id, name, status, score } = props.player;

  return (
    <Tr>
      <Td textAlign={"center"} fontWeight={'bold'}>{props.index}</Td>
      <Td textAlign={"center"}>{name}</Td>
      <Td textAlign={"center"}>{score}</Td>
      <Td textAlign={"center"}>{status}</Td>
    </Tr>
  );
};

export default LeaderBoard_Row