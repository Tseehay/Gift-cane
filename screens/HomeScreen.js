import { View, Text, SafeAreaView, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {AntDesign} from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable';

const HomeScreen = () => {
  
  const navigation = useNavigation();
  
   useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown: false,
      })
   });


  return (
    <SafeAreaView className="flex-1 relative">
       <ImageBackground className="flex-1">
        <View className="top-6 flex-1">
          {/* FIRST SECTION */}
          <View className="flex-row px-6 mt-10 items-center"> 
            <Text className="font-bold text-3xl text-[#000]" >GIFT</Text>
            <Text className="font-light text-3xl text-[#000]" >CANE</Text>
          </View>
          {/* SECOND SECTION */}
          <View className="mx-4 bottom-60 absolute">
            <View>
              <Text className="font-bold text-5xl text-[#000]" >GIVE GIFTS FOR THE PEOPLE YOU CARE</Text>
            </View> 
          </View>
          {/* Thired SECTION */}
          <TouchableOpacity
            onPress={()=> navigation.navigate("Discover")}
            className="mx-4 bg-white w-96 p-3 bottom-24 absolute items-center justify-center rounded-3xl" >
            <Animatable.View 
              animation={"pulse"}
              easing="ease-in-out"
              iterationCount={"infinite"}
              className="flex-row"
              >
              <Text className="font-bold text-[#3f3f3f] font-[] text-2xl">Get Started </Text>
              <View className="mx-4 mt-1">
                <AntDesign name="rightcircleo" size={27} /> 
              </View>
            </Animatable.View> 
          </TouchableOpacity>
        </View>
       </ImageBackground>
    </SafeAreaView>
  )
}

export default HomeScreen