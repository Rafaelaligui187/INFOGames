import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm]=useState({
    username:'',
    email: '',
    password:''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = () =>{}
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
          <View className="w-full justify-center items-center h-full px-4 my-1">
              <Image source={images.Applogo}
                resizemode='contain'
                className="w-[128px] h-[128px]"
              />
              <Text className="text-4xl mt-5 font-u_regular ">Sign up</Text>
              <FormField
                  title="Username"
                  value={form.username}
                  handleChangeText={(e) => setForm({ ...form, username: e })}
                  otherStyles="mt-2"
              />
              <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e) => setForm({ ...form, email: e })}
                  otherStyles="mt-2"
                  keyboardType="email-address"
              />
              <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e) => setForm({ ...form, password: e })}
                  otherStyles="mt-2"
              />
              <CustomButton
                  title="Create Account"
                  handlePress={submit}
                  containerStyles="w-[250px] mt-7"
                  isLoading={isSubmitting}
              />
        <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg font-pregular">
              Already have an account?
            </Text>  
            <Link
              href="/sign-up"
              className="text-lg font-u_bold text-originalColor "
            >
              Signup
            </Link>
          </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
export default SignUp
