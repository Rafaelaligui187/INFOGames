import { StatusBar } from 'expo-status-bar';
import {Text, View, Image, ScrollView } from 'react-native';
import { Link, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../constants/images';
import CustomButton from '../components/CustomButton';


export default function App() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className="w-full justify-center items-center min-h-screen h-[85vh] px-4">
          <Image 
            source={images.Applogo}
            className="w-[300px] h-[223px] pt-10"
            resizeMethod='contain'
          />
          <View>
            <Text className="text-5xl text-center">INFOGames</Text>
          </View>
          <Text className="text-center text-sm font-u_light">
          "INFOGames: Discover, explore, and keep track of all your favorite games in one convenient app!"
          </Text>

          <CustomButton 
            title="Sign in"
            handlePress={()=> router.push('/sign-in')}
            containerStyles="w-full mt-7"
          >
          </CustomButton>

          
        </View>
      </ScrollView>

      
      <StatusBar backgroundColor='#3A393A' style='light'></StatusBar>

    </SafeAreaView>
   
  );
}

