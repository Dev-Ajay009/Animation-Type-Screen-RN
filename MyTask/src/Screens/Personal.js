import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CustomHeader from '../commponets/CustomHeader'

const Personal = ({navigation}) => {
  const data=[{
    
  }]
  const renderItem = ({ item }) => {
    return (
        <>
           <View>

           </View>
        </>
    )
}
  return (
      <View>
          <View>
                <CustomHeader title={'Personal'} />
            </View>
            <View style={{
              padding:16
            }}>
              <FlatList 
              renderItem={renderItem}
              data={data}
              />
            </View>
    </View>
  )
}

export default Personal