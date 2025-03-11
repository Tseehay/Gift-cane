import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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

export default function About() {
    const navigation = useNavigation(); 
    const [ img, imgChanger] = React.useState(require('./../assets/chair5.jpg'));
    const [productAmt, productAmtChanger ] = React.useState(1)
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
               <TouchableOpacity  className="mx-5 my-7" onPress={navigation.goBack}>
                   <AntDesign  name='leftcircle' size={38}/>
               </TouchableOpacity>
            ),
            title: '',
            
            headerRight: () => (
               <View className="flex-row gap-6 -translate-x-7">
                  <TouchableOpacity>
                    <AntDesign 
                        name='hearto' 
                        size={28} 
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <AntDesign 
                        name='shoppingcart' 
                        size={28} 
                    />
                  </TouchableOpacity>
               </View>
            ),
        })
     });
     if (!fontsLoad) {
        return null;
      }

  return (
    <SafeAreaView className="flex-1 relative bg-[#fff]">
    <View className="flex-1 bg-white translate-y-10">
        <View className="h-[50%] bg-white items-center justify-center" >
            <Image 
                source={img}
                style={{width: "90%", height: "100%"}}
            />
        </View>
        <ScrollView className="flex-row gap-3 h-[16%] mx-1 -translate-y-3"  horizontal={true}>
            {Data.map((data) =>{
                return(
                    <TouchableOpacity 
                    onPress={() => imgChanger((i) => data.image)}
                    className="border-2  items-center flex-row justify-center border-black rounded-full" key={data.id}>
                        <Image 
                            source={data.image}
                            style={{width: 80, height: 80}}
                            className="rounded-full" 
                        />
                    </TouchableOpacity>
                    
                )
            })}
            
        </ScrollView>
       <View className="flex-wrap bg-[#e8eae6] flex-1 -translate-y-1">
          {/* ABOUT PRODUCT SECTION */}
            <View className="flex-row p-2">
               {/* Adding product SECTION */}
              <View className="rounded-full bg-white h-[54%] p-1 w-[40%] flex-row mx-2">
                 <TouchableOpacity 
                    onPress={()=>  productAmtChanger( (amt) => amt - 1 ) }
                    className="bg-white rounded-full h-[100%] w-[32%] justify-center items-center " style={styles.shadow}>
                    <AntDesign
                     name='minus'
                     size={23}
                    />
                 </TouchableOpacity>
                 <TouchableOpacity className="bg-white rounded-full h-[100%] w-[34%] justify-center items-center ">
                    <Text className="text-lg" >
                        { productAmt < 0 ? productAmtChanger(0)  : productAmt   }
                    </Text>
                 </TouchableOpacity>
                 <TouchableOpacity 
                    onPress={()=>  productAmtChanger(productAmt + 1 ) }
                    className=" bg-white rounded-full h-[100%] w-[32%] justify-center items-center" style={styles.shadow}>
                    <AntDesign
                     name='plus'
                     size={22}
                     className="translate-x-4"
                    />
                 </TouchableOpacity>
              </View>
            </View>
             {/* Adding RATE SECTION */}
            <View className="absolute right-5 h-[20%] w-auto  flex-row">
                <View className="my-5 flex-row">
                    <AntDesign
                        name='staro'
                        size={25}
                    />
                    <AntDesign
                        name='staro'
                        size={25}
                    />
                    <AntDesign
                        name='staro'
                        size={25}
                    />
                    <AntDesign
                        name='staro'
                        size={25}
                    />
                    <AntDesign
                        name='staro'
                        size={25}
                    />
                </View>
            </View>
            <View className="-translate-y-14 h-[30%]">
                <Text className="text-base  mx-4" style={styles.JosefinSans_700Bold} >Chair</Text>
                <View className="pl-4 pr-1 my-2  h-[130%] ">
                    <Text className="text-sm" style={styles.JosefinSans_500} >
                        When we define our button this way, the this variable in options is not the HomeScreen instance, so you can't call setState or any instance methods on it. 
                    </Text>
                    <View className="absolute flex-row bottom-5 left-4">
                        <Text className="" style={styles.JosefinSans_700Bold}>PRICE :</Text>
                        <Text className="" style={styles.JosefinSans_700Bold}> 300 Birr</Text>
                    </View>
                </View>
                <View className="bg-black h-14 mx-5 w-96 justify-center items-center flex-row rounded-xl -translate-y-2" style={styles.shadow}  >
                    <Text className="text-lg text-[#fff]" style={styles.JosefinSans_700Bold}>Add To Cart</Text>
                    <View className=" mx-4 ">
                        <AntDesign 
                            name='shoppingcart' 
                            size={23} 
                            color="#fff"
                        />
                    </View>
                </View>
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
      JosefinSans_600: {
        fontFamily: 'JosefinSans_600SemiBold',
      },
})