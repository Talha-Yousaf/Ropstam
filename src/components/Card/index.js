import { View, Text } from 'react-native'
import React from 'react'
import styles from "./styles";
import { height } from 'react-native-dimension';
const Card = ({item,index}) => {
  return (
    <View style={[styles.container,index==0&&{marginTop:height(2)}]}>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.bodyText}>{item.body}</Text>
    </View>
  )
}

export default React.memo(Card);