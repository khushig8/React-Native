import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

const Props = () => {
    const [count, setCount] = useState(1)
  return (
    <View>
      <Text style={{fontSize: 30}}>Props</Text>
      <Button title={'Press'} onPress={()=>setCount(count+1)} />
      <Child count={count} />
    </View>
  )
}

export default Props