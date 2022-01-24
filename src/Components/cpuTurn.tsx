import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { cpuMove, moves } from '../actions';


interface Props {
  onMove: (move: string) => void
}

export default ({ onMove }: Props) => {
  const [cpuTurn, setCpuTurn] = useState(-1);

  useEffect(() => {

    const move = cpuMove();
    console.info("CPU MOVE", move)
    onMove(moves[move].label);


  });

  return <View style={{ flex: 1 }}>
    {cpuTurn === -1 ? <Text>CPU is choosing</Text> : <Text>CPU choose {moves[cpuTurn].label}</Text>}
  </View>
}