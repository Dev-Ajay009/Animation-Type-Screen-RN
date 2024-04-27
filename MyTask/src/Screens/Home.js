import { View, Text, FlatList, ImageBackground, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomHeader from '../commponets/CustomHeader';

const Home = ({navigation}) => {
    const [data, setData] = useState();
    const [Lodear, setLodear] = useState(false);
    async function logMovies() {
        setLodear(true)
        const response = await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=7c94c4bf82af4e18a0ba534482945782");
        const data = await response.json();
        console.log(data?.articles[0]);
        setData(data?.articles);
        setLodear(false)
    }
    useEffect(() => {
        try {
            logMovies()
        } catch (error) {
            setLodear(false);
            console.log(error);
        }
    }, [])
    const renderItem = ({ item }) => {
        return (
            <>
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('NewDetails',{Obj:item})
                }}
                style={{
                    flex: 1,
                    padding: 10,
                    alignItems: 'center',
                    margin: 10,
                }} >
                  {item?.urlToImage?  <Image
                        source={{ uri: item?.urlToImage }}

                        style={{
                            width: 160,
                            height: 200,
                            resizeMode: 'cover'
                        }}
                    />:
                    <View style={{
                        flex:1,
                        alignItems:"center",
                        justifyContent:"center"
                    }}>
                    <Text>No Image found</Text>
                    </View>
                    }
                    <View style={{
                        position: "absolute",
                        zIndex: 5,
                        bottom: 10,
                        left: 10
                    }}>
                        <Text numberOfLines={2} style={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: "900"
                        }}>{item?.description}</Text>
                    </View>

                </TouchableOpacity>
            </>
        )
    }
    const ActiveLoder=()=>{
        return(
            <>
            <ActivityIndicator size={'large'} color={'#000'}/>
            </>
        )
    }
    return (
        <>
         <View>
                <CustomHeader title={'News'}/>
            </View>
         {Lodear? 
         <>
         {ActiveLoder()}
         </>
         :  <FlatList
                renderItem={renderItem}
                data={data}
                numColumns={2} // Two items per row
                columnWrapperStyle={{ justifyContent: 'space-between' }} // Space items evenly
            />}
        </>
    )
}

export default Home