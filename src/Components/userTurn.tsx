import React from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';


export default ({ style }: { style?: StyleProp<ViewStyle> }) => {
  return <View style={style}>
    <Text>Your turn</Text>
  </View>
}