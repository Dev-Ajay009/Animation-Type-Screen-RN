import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../commponets/CustomHeader'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Personal = ({ navigation }) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      let dataArray = currentUser.filter((v) => v.Type == 'Personal')
      setData(dataArray)
      console.log('currentUser0-->', dataArray);
    })()

  }, [])
  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
        onPress={()=>{
              //navigate profilepage
          navigation.navigate('ProfilePage',{Obj:item})
        }}
         style={{
          backgroundColor: "#fff",
          padding: 16,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: 'space-between',
          alignItems: "center",
          margin: 5
        }}>
          <Text style={styles.userText}>{item?.FirstName}</Text>
          <Text style={styles.userText}>{item?.Email}</Text>
          <Text style={styles.userText}>{item?.Type}</Text>
        </TouchableOpacity>
      </>
    )
  }
  return (
    <View>
      <View>
        <CustomHeader title={'Personal'}  navigation={navigation}/>
      </View>
      <View style={{
        padding: 16
      }}>{
          Data.length > 0 ?
            <FlatList
              renderItem={renderItem}
              data={Data}
            />
            :
            <View style={{
              alignItems: 'center'
            }}>
              <Text style={{
                color: 'red',
                fontSize: 16,
                fontWeight: "600"
              }}>No Data Found</Text>
            </View>
        }

      </View>
    </View>
  )
}
const styles =StyleSheet.create({
  userText:{
      color:'#000',
      fontSize:16,
      fontWeight:"700"
  }
})
export default Personal