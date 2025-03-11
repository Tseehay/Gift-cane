import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {AntDesign} from '@expo/vector-icons'
import {
  JosefinSans_300Light,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_600SemiBold,
  JosefinSans_700Bold,
} from '@expo-google-fonts/josefin-sans'
import { useFonts } from 'expo-font'

const Data  = [
  {
    id: 1,
    title: 'Chair',
    image: require('./../assets/chair3.jpeg'),
    price: '300 birr',
  },
  {
    id: 2,
    title: 'Chair',
    image: require('./../assets/chair1.jpg'),
    price: '800 birr',
  },
  {
    id: 3,
    title: 'Chair',
    image: require('./../assets/chair4.webp'),
    price: '400 birr',
  },
  {
    id: 4,
    title: 'Chair',
    image: require('./../assets/chair5.jpg'),
    price: '400 birr',
  },
  {
    id: 5,
    title: 'Chair',
    image: require('./../assets/chair7.webp'),
    price: '400 birr',
  },
];


export default function Discover() {
    const [text,onChangeText] = React.useState();
    const navigation = useNavigation();
    let [fontsLoad]  = useFonts({
      JosefinSans_300Light,
      JosefinSans_400Regular,
      JosefinSans_500Medium,
      JosefinSans_600SemiBold,
      JosefinSans_700Bold,
    })
   useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown: false,
      })
   });
   if (!fontsLoad) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 relative bg-[#fff]">
      <View className="top-4 flex-1 mx-2 bg-[#fff]">
        {/* HEADER LOGO SECTION */}
        <View className="flex-row px-2 items-center"> 
           <Text className="text-2xl text-[#000] " style={styles.JosefinSans_700Bold}>GIFT</Text>
           <Text className="font-light text-2xl text-[#000]" >CANE</Text>
        </View>
        {/* SEARCH SECTION */}
        <View className="w-auto my-4 bg-[white] flex-row rounded-lg">
           <View className="flex-row h-[100%] mx-4 bg-[#fff] items-center">
              <View className="flex-row rounded-xl h-[70%] bg-[#fff] "  style={styles.shadow}>
                <View className="pt-3 px-2 border-r border-black">
                  <AntDesign 
                    name="search1" 
                    size={26}
                   />
                </View>
                <TextInput 
                  style={styles.searchInput}
                  className="w-64 p-1 text-[#000] pl-2"
                  value={text}
                  onChangeText={onChangeText}
                  placeholder="Shoes"
                />
               </View>
            </View>  
            <View className="pt-4 pb-4 mx-2">
              <TouchableOpacity 
                onPress={()=> navigation.navigate("Cart")}
                className="bg-white h-12 pr-3 pl-2 items-center justify-center rounded-xl"
                style={styles.shadow}
                >
                <AntDesign
                  name='shoppingcart'
                  size={30}
                />
              </TouchableOpacity>
            </View>
        </View> 
        
        {/* CATAGORY SECTION */}
         
         <View className="w-auto">
            <Text className="text-lg -translate-y-2 tracking-wide mx-1" style={styles.JosefinSans_700Bold}>Catagory</Text>
            <View className="bg-[white] rounded-t-lg my-10 gap-3">
              <ScrollView className="flex-row w-[100%]"  horizontal={true} >
                <View className="p-2 pb-3 flex-row">
                   <Text className="bg-white p-2 pl-4 pr-5 mx-2 text-base tracking-wide rounded-lg border-2 border-black" style={[styles.shadow,styles.JosefinSans_500]}>Chair</Text>
                   <Text className="bg-white p-2 pl-4 pr-5 mx-2 text-base tracking-wide rounded-lg" style={[styles.shadow,styles.JosefinSans_500]}>Table</Text>
                   <Text className="bg-white p-2 pl-4 pr-5 mx-2 text-base tracking-wide rounded-lg" style={[styles.shadow,styles.JosefinSans_500]}>Sofa</Text>
                   <Text className="bg-white p-2 pl-4 pr-5 mx-2 text-base tracking-wide rounded-lg" style={[styles.shadow,styles.JosefinSans_500]}>T-Shirt</Text>
                   <Text className="bg-white p-2 pl-4 pr-5 mx-2 text-base tracking-wide rounded-lg" style={[styles.shadow,styles.JosefinSans_500]}>Shoes</Text>
                </View>
              </ScrollView>
            </View>
         </View>
         
          {/* PRODUCT SECTION */}
          <View className="flex-1 bg-[white] gap-4" >  
            <FlatList
                 data={Data}
                 keyExtractor={Data => Data.id.toString()}
                 renderItem={({ item }) =>
                 <View className="flex-row p-1 pl-2 pt-2 gap-4">
                  <View className="bg-white h-60 pt-1 pl-1 pr-1 mt-5 rounded-xl mx-2" style={styles.shadow}>
                    <TouchableOpacity 
                      onPress={()=> navigation.navigate("About")}
                      className="bg-white">
                     <Image
                      source={item.image}
                      style={{width: 180, height: 180}}
                     />
                    </TouchableOpacity>
                    <View className="translate-y-3 z-50 mx-3 absolute">
                     <AntDesign name='hearto' size={23} />
                    </View>
                    <View className="">
                      <Text className="mx-2 text-base tracking-wider"  style={styles.JosefinSans_700Bold}>Chair</Text>
                    </View>
                    <View className="flex-row">
                     <Text className="mx-2 text-base tracking-wider  -translate-y-2" style={styles.JosefinSans_500}> {item.price} </Text>
                      <View className="bg-black p-1 rounded-br-lg rounded-tl-lg absolute right-0 bottom-0 translate-x-1">
                         <AntDesign name='shoppingcart' className="bottom-1" color="#fff"  size={28} />
                      </View>  
                    </View>
                  </View>
                 </View> 
                }
               numColumns={2}
            />
            <View className="my-10"></View>
          </View>      

      </View>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    searchInput: {
       color: "#000",
    },
    scrollView:{
        marginVertical: 20,
    },
    shadow:{
      shadowOffset: {width: 1, height: 4},  
      shadowColor: '#000',  
      shadowOpacity: 0.2,  
      shadowRadius: 7, 
      elevation: 10, 
   },
   JosefinSans_700Bold: {
    fontFamily: 'JosefinSans_700Bold',
  },
  JosefinSans_500: {
    fontFamily: 'JosefinSans_500Medium',
  },
  JosefinSans_600: {
    fontFamily: 'JosefinSans_600SemiBold',
  },

})