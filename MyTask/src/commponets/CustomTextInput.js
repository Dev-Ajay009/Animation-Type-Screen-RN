import { View, Text, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = ({placeholder,onChangeText}) => {
  return (
    <View>
        <TextInput 
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={{
            borderColor:'#000',
            borderWidth:0.8,
            borderRadius:10,
            paddingLeft:10
        }}
        />
    </View>
  )
}

export default CustomTextInput