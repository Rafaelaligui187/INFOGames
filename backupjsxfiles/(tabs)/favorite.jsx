import { View, Text, Image } from 'react-native'
import React from 'react'

const Favorite = () => {
  return (
    <View className="flex items-center justify-top mt-32 h-full">
      <Image className="w-32 h-32 mt-32" source={require("../../assets/BackgroundImage/empty-inbox.png")}></Image>
      <Text className="h-32 w-32 text-center font-u_regular">No favorite games for now.</Text>
    </View>
  )
}

export default Favorite