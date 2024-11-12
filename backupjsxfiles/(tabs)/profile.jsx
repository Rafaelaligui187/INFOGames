import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View className="flex items-center h-full">
      <Image style={styles.backgroundImage} source={require('../../assets/BackgroundImage/Blue-sky.jpg')}/>
      <Image style={styles.userImage} className="w-32 h-32" source={require('../../assets/icons/user.png')}/>
      <Text  className="font-u_regular text-3xl">Rafael Aligui</Text>
      <Text className="font-u_regular text-gray-500 text-1xl">aliguirafael@gmail.com</Text>
      <Text style={{width: '64%'}}className="mt-14">"I'm passionate about gaming, drawing, and creating new things. In my free time, I love diving into different video games and expressing myself through artwork. Music is my constant companion, fueling my creativity and keeping me inspired.😎🔥"</Text>
      <Text style={styles.editBio}className="flex items-center h-full font-u_regular">edit bio.</Text>
      <View className="bg-black" style={styles.Blackline}></View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  editBio:{
    color: 'blue',
    textAlign: 'center'
  },
  backgroundImage: {
    height: 250,
    width: 400,
    alignSelf: 'center'
  },
  userImage:{
    position: 'absolute',
    marginTop: 100,
  },
  Blackline:{
    width: 50,
    height: 100,
  }
})
