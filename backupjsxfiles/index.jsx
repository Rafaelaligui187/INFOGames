import { StatusBar } from 'expo-status-bar';
import {Text, View, Image } from 'react-native';
import { Link } from 'expo-router';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();


export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl font-u_regular">Welcome</Text>
      <Text className="text-3xl font-u_regular">to</Text>
      <Image className="w-64 h-64" source={require('../assets/game-controller.png')}/>
      <Text className="text-3xl font-u_regular mb-5">INFOGames</Text>
        <Link href="/profile">Go to my Profile</Link>
      <StatusBar style="auto"/>
    </View>
  );
}

