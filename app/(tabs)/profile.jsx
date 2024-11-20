import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View className="flex items-center h-full">
      <Image style={styles.backgroundImage} source={require('../../assets/BackgroundImage/Blue-sky.jpg')}/>
      <Image style={styles.userImage} className="w-32 h-32" source={require('../../assets/icons/user.png')}/>
      <Text  className="font-u_regular text-3xl">Rafael Aligui</Text>
      <Text className="font-u_regular text-gray-500 text-1xl">aliguirafael@gmail.com</Text>
      <Text  className="mt-14">Professional gamer 🎮🇵🇭</Text>
      <Text style={styles.editBio}className="flex items-center h-full font-u_regular">edit bio.</Text>
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
    height: 350,
    width: 600,
    alignSelf: 'center'
  },
  userImage:{
    position: 'absolute',
    marginTop: 150,
  }
})
