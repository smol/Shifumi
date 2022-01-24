import React from 'react';
import { Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import { moves } from '../actions';

interface Props {
  onMove: (move: string) => void
}

export default ({ onMove }: Props) => {
  return <View style={{ flex: 0, backgroundColor: 'blue', alignContent: 'space-between', alignItems: 'stretch', flexDirection: 'row' }}>
    {Object.keys(moves).map(move =>
      <TouchableHighlight style={{ flex: 1, backgroundColor: 'green' }} onPress={() => onMove(moves[+move].label)}>
        <Text style={{ flex: 0, padding: 20, textAlign: 'center' }}>{moves[+move].label}</Text>
      </TouchableHighlight>)}
  </View>
}