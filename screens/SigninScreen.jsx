import React, { useState } from 'react'
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CheckBox from 'react-native-check-box'
import login from '../assets/images/loginimage.png';
import googleIcon from '../assets/images/google-icon.png';
import appleLogo from '../assets/images/apple.png'
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


export default function SigninScreen() {
  const navigation = useNavigation()
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView className=" bg-white flex-1">
      <View className='py-20 px-5 space-y-6'>
        <View className='space-y-3'>
          <Text className="font-bold text-4xl">Login</Text>
          <Text className='text-gray-400'>Welcome to TripGuide Application, </Text>
        </View>
        
        {/* login formms */}
        <View className='space-y-5'>
          {/* scroll view */}
          <ScrollView className='space-y-5' style={{ height: hp('25%') }}>
            <View className='w-full'>
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Email Address: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('80%') }} placeholder='eg: example@example.org' />
              </View>
            </View>
            <View className='w-full'>
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Password: </Text>
                <TouchableOpacity className='' onPress={() => { }}><Text className="text-blue-400 text-xs">forget password? </Text></TouchableOpacity>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{width: wp('80%')}} secureTextEntry={!showPassword} placeholder='******************' />
                <TouchableOpacity onPress={() => { setShowPassword(!showPassword) }}><Ionicons name={showPassword ? 'eye-off-outline' : 'eye'} size={18} /></TouchableOpacity>
              </View>
            </View>
            <View className='flex-row items-center gap-x-2'>
              <CheckBox rightText='Remeber Me' onClick={()=>{}}/>
              <Text className=''>Remember me</Text>
            </View>
          </ScrollView>
          
          {/*  button */}
          <View className='flex justify-center items-center space-y-6'>
            <TouchableOpacity className={`rounded-xl  bg-blue-950  p-3`} style={{ width: wp('85%') }} onPress={() => navigation.replace("bottomTab")}>
              <Text className="text-white font-bold  text-center">login</Text>
            </TouchableOpacity>
            {/* division tag */}
            <View className='w-[72]'>
              <View className='flex-row justify-center items-center gap-x-3'>
                <View className='border-b border-gray-300 w-full'></View>
                <Text className="text-gray-400 italic w-full">or sign in with</Text>
                <View className='border-b border-gray-300 w-full'></View>
              </View>
            </View>
            <TouchableOpacity className={`rounded-xl bg-gray-100  p-2`} style={{ width: wp('85%') }} onPress={() => {}}>
              <View className='flex-row items-center justify-center gap-x-2'>
                <Image source={googleIcon} className='w-5 h-5' />
                <Text className="">Continue with google</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className={`rounded-xl bg-black  p-2`} style={{ width: wp('85%') }} onPress={() => {}}>
              <View className='flex-row items-center justify-center gap-x-2'>
                <Image source={appleLogo} className='w-5 h-5' />
                <Text className="text-white">Continue with apple</Text>
              </View>
            </TouchableOpacity>
            <View className='space-y-3'>
              <Text className=''>Don't have an account yet?</Text>
              <TouchableOpacity className={``} onPress={() => navigation.navigate('signup')}>
                <View className='flex-row items-center justify-center gap-x-2'>
                  <Text className="text-blue-400">create account / signup</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* socials */}
          <View className='flex justify-center items-center pt-3'>
            <Text className='text-orange-400'>follow us on all social-media platform</Text>
            <View className='flex-row justify-center items-center gap-x-2 p-2'>
              <TouchableOpacity onPress={() => { }}><Ionicons name='logo-instagram' color='pink' size={25} /></TouchableOpacity>
              <TouchableOpacity onPress={() => { }}><Ionicons name='logo-twitter' color='black' size={25} /></TouchableOpacity>
              <TouchableOpacity onPress={() => { }}><Ionicons name='logo-facebook' color='blue' size={25} /></TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}