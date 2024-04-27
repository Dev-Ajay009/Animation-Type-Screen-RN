import AsyncStorage from "@react-native-async-storage/async-storage";


 export const SetData = async (value) => {
  console.log('value',value);
    try {
      await AsyncStorage.setItem("user", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };
 export const GetData = async () => {
    try {
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);
      return currentUser
      } catch (error) {
       console.log(error); 
      }
  };