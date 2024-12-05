import { View, Text, Button } from 'react-native'
import React from 'react'
import UseStateHook from './src/components/UseStateHooks'
import Props from './src/components/Props'

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30, color: "#ff0000"}}>App</Text>
      <Button title='Press Here'/>
      <UseStateHook/>
      <Props/>
    </View>
  )
}

export default App