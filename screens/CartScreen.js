import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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


export default function CartScreen() {
   
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
            headerTransparent: true,
            headerLeft: () => (
               <TouchableOpacity  className="mx-5 my-5" onPress={navigation.goBack}>
                   <AntDesign  name='leftcircle' size={38}/>
               </TouchableOpacity>
            ),
            title: 'My Cart',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily: 'JosefinSans_700Bold'
            },
            headerTitleAlign: 'center'
        })
     });
     if (!fontsLoad) {
        return null;
      }

  return (
    <SafeAreaView className="flex-1 relative bg-[#fff]">
        <View className="flex-1 bg-white  translate-y-20">
            {/* CARD SECTION */}
            <View className="flex-row pl-5 w-[100%]  h-[60%]">
            <View className="flex-row my-2  p-2 h-[21%] bg-white rounded-2xl w-96" style={styles.shadow} >                
               <View className="rounded-2xl">
                   <Image
                    style={{width: 90, height: 90}}
                    source={require('./../assets/chair5.jpg')}
                   />
               </View>
               <View className="pl-3 pt-1 w-[76%]">
                    <Text className="mx-2 text-base" style={styles.JosefinSans_700Bold} >Gaming Chair</Text>
                    <Text className="mx-1 font-light" style={{fontFamily: 'JosefinSans_400Regular', fontSize: 13 }} > You can Sleep And Use for all Day </Text>
                    <View className="flex-row">
                        <Text className="-bottom-1 left-3 text-base font-semibold" style={styles.JosefinSans_500}>450 Birr  ||  </Text>
                        <Text className="-bottom-1 mx-1 text-base font-semibold tracking-wider" style={styles.JosefinSans_500}> Amt: 4  </Text>
                        <TouchableOpacity className="absolute -bottom-3 right-4 bg-[#DC4C64]  p-2 rounded-lg" style={styles.shadow} >
                           <AntDesign
                            name='delete'
                            size={20}
                            color="#fff"
                           />
                        </TouchableOpacity>
                    </View>
               </View>
            </View>
            </View>
            <View className="absolute pl-2 bottom-[13%] w-[100%] ">
                <View className="flex-row pl-2">
                    <Text className="text-[#9FA6B2] text-base" style={styles.JosefinSans_700Bold}>Qauntity</Text>
                    <Text className="absolute text-[#9FA6B2] text-base right-4" style={styles.JosefinSans_700Bold}>3</Text>
                </View>
                <View className="flex-row my-4 pl-2">
                    <Text className="text-[#9FA6B2] text-base" style={styles.JosefinSans_700Bold}>Sub Total</Text>
                    <Text className="absolute text-[#9FA6B2] text-base right-4" style={styles.JosefinSans_700Bold}>400 Birr</Text>
                </View>
                <View className="flex-row my-2 pl-2">
                    <Text className="text-[#9FA6B2] text-base" style={styles.JosefinSans_700Bold}>Shipping</Text>
                    <Text className="absolute text-[#9FA6B2] text-base right-4" style={styles.JosefinSans_700Bold}>10 Birr</Text>
                </View>
                <View className="flex-row my-3">
                    <Text className="absolute text-[#9FA6B2] text-base font-bold right-0">--------------------------------------------------------------------------</Text>
                </View>
                <View className="my-5 pl-2">
                    <View className="translate-y-2 flex-row">
                        <Text className="text-[#9FA6B2] text-base " style={styles.JosefinSans_700Bold}>Total</Text>
                        <Text className="absolute text-[#9FA6B2] text-base right-4" style={styles.JosefinSans_700Bold}>410 Birr</Text>
                    </View>
                </View>
                <View className="pr-2 my-3">
                    <TouchableOpacity className=" bg-[#161616] translate-y-2  p-2 rounded-lg h-[45%] flex-row items-center justify-center" style={styles.shadow} >
                        <Text className="text-base text-[#fff] mx-1" style={styles.JosefinSans_700Bold} >Place This Order </Text>
                        <AntDesign
                            name='delete'
                            size={20}
                            color="#fff"
                        />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
})