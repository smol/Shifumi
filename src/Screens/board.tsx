import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { play } from '../actions';
import CpuTurn from '../Components/cpuTurn';
import Play from '../Components/plays';
import UserTurn from '../Components/userTurn';
import Result from './result';


const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch' },
  resultContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  userLabelContainer: { flex: 0, alignSelf: 'center' }
})

export default () => {
  const [userTurn, setUserTurn] = useState<number>(-1);
  const [cpuTurn, setCpuTurn] = useState<number>(-1);

  const onPlayed = (move: string, isUser: boolean = false) => {
    try {
      const moveIndex = play(move);
      console.info(moveIndex, isUser);
      (isUser ? setUserTurn : setCpuTurn)(moveIndex);
    } catch (e) {
      console.log(e);
    }

  }

  if (userTurn > -1 && cpuTurn > -1) {
    return <Result userTurn={userTurn} cpuTurn={cpuTurn} onPlayAgain={() => {
      setUserTurn(-1);
      setCpuTurn(-1);
    }} />
  }

  return <View style={styles.container}>
    <View style={styles.resultContainer}>
      {userTurn === -1 ? <UserTurn style={styles.userLabelContainer} /> : <CpuTurn onMove={() => {
        onPlayed('lol')
        }} />}
    </View>
    <Play onMove={(move) => onPlayed(move, true)} />

  </View>
}