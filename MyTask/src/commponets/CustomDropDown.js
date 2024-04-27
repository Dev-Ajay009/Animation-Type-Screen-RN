import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { template } from '@babel/core'
//CustomDropDown
const CustomDropDown = ({data,title,setType}) => {
    const [open,setOpen]=useState(false)
    const renderItem=({item})=>{
            return(
                <>
                    <TouchableOpacity 
                    onPress={()=>{
                        setType(item?.title);
                        setOpen(false)
                    }}
                    style={{
                        marginLeft:10,
                        margin:5
                    }}>
                        <Text>{item?.title}</Text>
                    </TouchableOpacity>
                </>
            )
    }
  return (
    <View>
    <TouchableOpacity 
    onPress={()=>{
        setOpen(!open)
    }}
    
    style={{
        borderColor:'#000',
        borderWidth:0.8,
        borderRadius:10,
        paddingLeft:10,
        padding:14
    }}>
                <Text>{title}</Text>
    </TouchableOpacity>
   { 
   open&&
   <View style={{
        width:'auto',
        height:'auto',
        backgroundColor:'#fff',
        zIndex:5,
        // marginLeft:10,
        borderWidth:0.5,
        borderColor:'#000',
        borderTopWidth:0,
        
    }}>
        <FlatList 
        data={data}
        renderItem={renderItem}
        />
    </View>
    }
    </View>
  )
}

export default CustomDropDown