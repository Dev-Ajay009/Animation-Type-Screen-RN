import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
//CustomHeader
const CustomHeader = ({ title, isBack = false,navigation }) => {
  return (
    <View style={{
      backgroundColor: "#fff",
      width: "100%",
      height:55,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 15
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: isBack? "space-between":"center",
        padding: 16
      }}>
        {
          isBack ? <TouchableOpacity
          onPress={()=>{
            navigation.goBack();
          }}
          >
            <Image
              source={require('../assets/back.png')}
              style={{
                width: 30,
                height: 30,
              }}
            />
          </TouchableOpacity>
            :
            null
        }

        <Text style={{ color: '#000', fontSize: 18, fontWeight: "bold" }}>{title}</Text>
        {isBack && <View style={{
          width: 20,
          height: 20,
        }} />}
      </View>
    </View>
  )
}

export default CustomHeader