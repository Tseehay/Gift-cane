import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/DiscoverScreen';
import About from './screens/AboutScreen';
import {AntDesign} from '@expo/vector-icons'
import CartScreen from './screens/CartScreen';


const Stack = createNativeStackNavigator();

export default function App () {  
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="About" component={About}  />
          <Stack.Screen name="Cart" component={CartScreen}  />
        </Stack.Navigator>  
      </NavigationContainer>
   </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
