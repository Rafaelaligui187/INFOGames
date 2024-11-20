import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-originalColor min-h-[62px] rounded-3xl justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
    >
      <Text className={`font-u_light text-lg ${textStyles}`}>{title}</Text>

    </TouchableOpacity>
  )
}

export default CustomButton