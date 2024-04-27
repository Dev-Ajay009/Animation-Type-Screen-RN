import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomBtn = ({title,style,onPress}) => {
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={[{
        backgroundColor:'skyblue',
        borderRadius:16,
        alignItems:"center",
        padding:10
    },{...style}]}>
      <Text style={{
        color:'#fff',
        fontSize:16,
        fontWeight:'600'
      }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomBtn