import { View, Text, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../commponets/CustomHeader'
import CustomTextInput from '../commponets/CustomTextInput';
import CustomBtn from '../commponets/CustomBtn';
import { GetData } from '../CommonFn/Common';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({ navigation }) => {
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [Data, setData] = useState();
    useEffect(() => {
        (async () => {
            const savedUser = await AsyncStorage.getItem("user");
            const currentUser = JSON.parse(savedUser);
            setData(currentUser)
        })()

    }, [])
    const OnSubmit = () => {
        console.log('Data----->', Data);
        if (Data.Email == Email && Data.Password == Password) {
            navigation.navigate('BottomRoute')
        } else {
            alert('Please enter correct value')
        }
    }
    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{
                flex: 1,
                backgroundColor: "#fff",

            }}>
            <View>
                <CustomHeader title={'SignIn'} />
            </View>
            <View style={{
                padding: 16
            }}>
                <View style={{ marginTop: 15 }}>
                    <CustomTextInput
                        placeholder='Email'
                        onChangeText={(e) => { setEmail(e) }}
                        value={Email}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <CustomTextInput
                        placeholder='Password'
                        onChangeText={(e) => { setPassword(e) }}
                        value={Password}
                    />
                </View>
                <View style={{
                    marginTop: 20,
                    alignItems: "center"
                }}>
                    <CustomBtn title={'Submit'} style={{ width: '50%' }} onPress={OnSubmit} />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignIn