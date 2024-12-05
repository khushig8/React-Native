import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text style={{ fontSize: 30 }}>TextInput</Text>
            <Text style={{fontSize:20}}>Name: {name}</Text>
            <TextInput style={{ fontSize: 20, borderWidth: 3, borderColor: 'green' }} value={name} placeholder="Enter Value" onChangeText={(name)=>setName(name)} />
            <Button title="Clear" onPress={()=>setName()}/>
        </View>
    )
}

export default InputText