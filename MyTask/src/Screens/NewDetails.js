import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomHeader from '../commponets/CustomHeader'

const NewDetails = ({ route, navigation }) => {
    const objs = route.params.Obj
    console.log('obj---', objs);
    return (
        <View>
            <View>
                <CustomHeader title={'NewDetails'} />
            </View>
            <View style={{

            }}>
                <Image
                    source={{ uri: objs?.urlToImage }}
                    style={{
                        width: '100%',
                        height: 225,
                        resizeMode: "contain"
                    }}
                />
                <View style={{
                    padding: 16
                }}>
                    <Text style={{
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "600",
                        marginTop: 10
                    }}>{objs?.title}</Text>
                    <Text style={{
                        color: "#000",
                        fontSize: 13,
                        fontWeight: "400",
                        marginTop: 10
                    }}>Author:{objs?.author}</Text>
                    <Text style={{
                        color: "#000",
                        fontSize: 14,
                        fontWeight: "400",
                        marginTop: 10
                    }}>{objs?.description}</Text>
                </View>
            </View>
        </View>
    )
}

export default NewDetails