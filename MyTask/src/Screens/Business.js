import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../commponets/CustomHeader'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Business = ({navigation}) => {
  const [Data, setData] = useState([]);
  useEffect(() => {
    //get data from AsyncStorage and filter by Type
    (async () => {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      let dataArray = currentUser.filter((v) => v.Type == 'Business')
      setData(dataArray)
    })()

  }, [])
  //render FlatList Ui
  const renderItem = ({ item }) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            //navigate profilepage
            navigation.navigate('ProfilePage', { Obj: item })
          }}
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: "center"
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
        <CustomHeader title={'Business'} navigation={navigation}/>
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
const styles = StyleSheet.create({
  userText: {
    color: '#000',
    fontSize: 16,
    fontWeight: "700"
  }
})
export default Business