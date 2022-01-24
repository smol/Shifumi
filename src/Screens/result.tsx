import React, { useEffect, useState } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import { getResult, moves } from '../actions';

interface Props {
  userTurn: number,
  cpuTurn: number,
  onPlayAgain: (userWon: boolean) => void
}

export default ({ userTurn, cpuTurn, onPlayAgain }: Props) => {
  const [resultLabel, setResultLabel] = useState<string>();

  useEffect(() => {
    const result = getResult(userTurn, cpuTurn);
    setResultLabel(result);

  }, []);

  return <View>
    <Text>{moves[userTurn].label}</Text>
    <Text>{moves[cpuTurn].label}</Text>
    <Text>{resultLabel}</Text>
    <TouchableHighlight onPress={onPlayAgain}>
      <Text>Play again</Text>
    </TouchableHighlight>
  </View>
}