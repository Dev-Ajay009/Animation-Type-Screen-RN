import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomHeader from '../commponets/CustomHeader'


const ProfilePage = ({ navigation, route }) => {
    const objs = route?.params?.Obj
    console.log('obj---', objs);
    return (
        <View>
            <View>
                <CustomHeader title={'ProfilePage'} isBack={true}  navigation={navigation} />
            </View>
            <View style={{
                padding: 16
            }}>
                <View style={{
                    backgroundColor: "#fff",
                    padding: 10,
                    borderRadius: 10
                }}>
                    <Text style={styles.userText}>FirstName:-  {objs?.FirstName}</Text>
                    <Text style={styles.userText}>LastName:-  {objs?.LastName}</Text>
                    <Text style={styles.userText}>Email:- {objs?.Email}</Text>
                    <Text style={styles.userText}>Type:- {objs?.Type}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SignIn')
                        }}
                        style={{
                            margin: 5
                        }}
                    >
                        <Text style={{
                            color: "#000",
                            fontSize: 17,
                            fontWeight: '600',
                            textAlign: "right"
                        }}>Logout-</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    userText: {
        color: '#000',
        fontSize: 16,
        fontWeight: "700",
        margin: 5
    }
})
export default ProfilePage