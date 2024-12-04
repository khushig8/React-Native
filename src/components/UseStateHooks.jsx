import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
    const [name, setName] = useState("Khushi")
    const getName = () => {
        setName("Anchal")
    }
  return (
    <View>
      <Text>Name: {name}</Text>
      <Button title="Press" onPress={getName}/>
    </View>
  )
}

export default UseStateHook