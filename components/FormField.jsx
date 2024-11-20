import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { icons } from "../constants";

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,...props}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-blackfont-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 bg-originalColor rounded-2xl focus:border-secondary flex flex-row items-center">
        <TextInput
          className="flex-1 text-black font-u_regular text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="black--"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.hide_eye}
              className="w-6 h-6 "
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default FormField;