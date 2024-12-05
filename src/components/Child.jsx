import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
  return (
    <View>
      <Text style={{fontSize: 20}}>Child</Text>
      <Text>{props.count}</Text>
    </View>
  )
}

export default Child