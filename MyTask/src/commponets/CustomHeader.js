import { View, Text } from 'react-native'
import React from 'react'

const CustomHeader = ({title}) => {
  return (
    <View style={{
        backgroundColor:"#fff",
        width:"100%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation:15
    }}>
      <Text style={{color:'#000',fontSize:18,fontWeight:"bold"}}>{title}</Text>
    </View>
  )
}

export default CustomHeader