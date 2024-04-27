import { View, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useState } from 'react'
import CustomTextInput from '../commponets/CustomTextInput'
import CustomHeader from '../commponets/CustomHeader';
import CustomBtn from '../commponets/CustomBtn';
import CustomDropDown from '../commponets/CustomDropDown';
import DocumentPicker, { types } from 'react-native-document-picker';
import { SetData } from '../CommonFn/Common';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignUp = ({navigation}) => {
    
    const Data=[
        {
            title:'Personal'
        },
        {
            title:'Business'
        }
    ]
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
      try {
        const response = await DocumentPicker.pick({
          presentationStyle: 'fullScreen',
        });
        console.log('response',response);
        setFileResponse(response);
      } catch (err) {
        console.log(err);
      }
    }, []);
    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [ProfilePic, setProfilePic] = useState('');
    const [Type, setType] = useState('');
    const OnSubmit=async()=>{
            let data={
                    'FirstName':FirstName,
                    'LastName':LastName,
                    'Email':Email,
                    'Password':Password,
                    'ConfirmPassword':ConfirmPassword,
                    'ProfilePic':ProfilePic,
                    'Type':Type
            }
          if(Email != ''&& Password != '' && Type !=''){
            try {
                // Get existing data from AsyncStorage
                const savedUser = await AsyncStorage.getItem("user");
          
                // Parse the saved data into an array (or start with an empty array if there's no saved data)
                const currentUser = savedUser ? JSON.parse(savedUser) : [];
          
                // Add the new data to the array
                currentUser.push(data);
          
                // Store the updated array in AsyncStorage
                await AsyncStorage.setItem("user", JSON.stringify(currentUser));
          
                // Do something after successfully saving (e.g., navigate to a different screen or show a success message)
                console.log("User data saved successfully.");
                      setTimeout(() => {
            navigation.navigate('SignIn')
           }, 500);
              } catch (error) {
                // Handle errors (e.g., error in saving data)
                console.error("Error saving user data:", error);
              }
          
     
          }else{
            alert('Please enter all value')
          }
    }
    return (
        <KeyboardAvoidingView 
        behavior="padding"
        style={{
            flex:1,
            backgroundColor: "#fff",
            
        }}>
            <View>
                <CustomHeader title={'SignUp'}  navigation={navigation}/>
            </View>
            <View style={{
                padding: 16
            }}>
            <View style={{
                marginTop:10
            }}>
                <CustomTextInput
                    placeholder='FirstName'
                    onChangeText={(e) => { setFirstName(e) }}
                    value={FirstName}
                />
            </View>
            <View style={{
                marginTop:10
            }}>
                <CustomTextInput
                    placeholder='LastName'
                    onChangeText={(e) => { setLastName(e) }}
                    value={LastName}
                />
            </View>
            <View style={{marginTop:15}}>
                <CustomTextInput
                    placeholder='Email'
                    onChangeText={(e) => { setEmail(e) }}
                    value={Email}
                />
            </View>
            <View style={{marginTop:15}}>
                <CustomTextInput
                    placeholder='Password'
                    onChangeText={(e) => { setPassword(e) }}
                    value={Password}
                />
            </View>
            <View style={{marginTop:15}}>
                <CustomTextInput
                    placeholder='ConfirmPassword'
                    onChangeText={(e) => { setConfirmPassword(e) }}
                    value={ConfirmPassword}
                />
            </View>
            <TouchableOpacity 
            onPress={()=>{
                handleDocumentSelection()
            }}
            style={{
                marginTop:15,
                backgroundColor:'gray',
                width:'30%',
                alignItems:"center",
                padding:5,
                borderRadius:10
            }}>
                <Text style={{
                    color:'#fff'
                }}>chooseFile</Text>
            </TouchableOpacity>
                    <View style={{
                        marginVertical:10
                    }}>
                        <CustomDropDown 
                        title={ Type?Type: 'Select Type'}
                        data={Data}
                        setType={setType}
                        />
                 </View>
            <View style={{
                marginTop:20,
                alignItems:"center"
            }}>
                <CustomBtn  title={'Submit'} style={{width:'50%'}} onPress={OnSubmit} />
            </View>
            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginTop:30,
                marginLeft:80
            }}>
                <Text style={{
                    color:'#000',
                    fontSize:18,
                    fontWeight:"800"
                }}>Alread account:</Text>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('SignIn')
                }}
                >
                 <Text style={{
                    fontWeight:"400",
                    color:"blue",
                    fontSize:16,
                    borderBottomWidth:1,
                    borderBottomColor:'blue',
                    marginLeft:10
                }}>SignIn</Text>
                </TouchableOpacity>
            </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default SignUp