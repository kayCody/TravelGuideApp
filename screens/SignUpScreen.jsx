import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import googleIcon from '../assets/images/google-icon.png';
import appleLogo from '../assets/images/apple.png'
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {
  const navigation = useNavigation()
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView className=" bg-white flex-1">
      <View className='py-20 px-5 space-y-3'>
        <View className='space-y-3'>
          <Text className="font-bold text-4xl">Create Account</Text>
          <Text className='text-gray-400'>Welcome to TripGuide Application form, </Text>
        </View>

        {/* login formms */}
        <View className='space-y-3'>
          <ScrollView className='space-y-5' style={{height: hp('42%'), width: wp('93%') }}>
            <View className='flex-row gap-x-2'>
              <View className='' style={{ width: wp('43%') }} >
                <View className='flex-row justify-between items-center pb-2'>
                  <Text className="text-black font-semibold">First name: </Text>
                </View>
                <View className='flex-row justify-between items-center border rounded-md p-3'>
                  <TextInput className='' style={{ width: wp('60%') }} placeholder='eg: Hannah' />
                </View>
              </View>
              <View className='' style={{ width: wp('43%') }} >
                <View className='flex-row justify-between items-center pb-2'>
                  <Text className="text-black font-semibold">Last Name: </Text>
                </View>
                <View className='flex-row justify-between items-center border rounded-md p-3'>
                  <TextInput className='' style={{ width: wp('60%') }} placeholder='eg: Afi' />
                </View>
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Email Address: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('85%') }}  placeholder='eg: example@email.com' />
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Primary Contact: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('85%') }} placeholder='eg: 233240745381' />
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Password: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('76%') }} secureTextEntry={!showPassword} placeholder='******************' />
                <TouchableOpacity onPress={() => { setShowPassword(!showPassword) }}><Ionicons name={showPassword ? 'eye-off' : 'eye'} size={18} /></TouchableOpacity>
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Confirm Password </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('76%') }} secureTextEntry={!showPassword} placeholder='******************' />
                <TouchableOpacity onPress={() => { setShowPassword(!showPassword) }}><Ionicons name={showPassword ? 'eye-off' : 'eye'} size={18} /></TouchableOpacity>
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Country of Birth: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('85%') }} placeholder='eg: Ghana' />
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Home / mailing Address: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('85%') }} placeholder='eg: HG123, AK-123-4567, Knust' />
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">City of Home/mailing Address: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('85%') }} placeholder='eg: Accra, Kumasi, Takoradi, New York' />
              </View>
            </View>
            {/* Emergency Conatc person info */}
            <Text className='font-bold text-red-500'>Emergency Contact Person</Text>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Full name: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('85%') }} placeholder='eg: Ernest Aviani' />
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Relationship with person: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('85%') }} placeholder='eg: husband, wife, brother, sister, mother, father etc...' />
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Email Address: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('80%') }} placeholder='eg: example@email.com' />
              </View>
            </View>
            <View className='' style={{ width: wp('88%') }} >
              <View className='flex-row justify-between items-center pb-2'>
                <Text className="text-black font-semibold">Primary Contact: </Text>
              </View>
              <View className='flex-row justify-between items-center border rounded-md p-3'>
                <TextInput className='' style={{ width: wp('85%') }} placeholder='eg: 233240745381' />
              </View>
            </View>
          </ScrollView>
          {/*  button */}
          <View className='flex justify-center items-center space-y-3'>
            <TouchableOpacity className={`rounded-xl bg-blue-950  p-3`} style={{ width: wp('85%') }} onPress={() => navigation.replace("bottomTab")}>
              <Text className="text-white font-bold  text-center">Create Account</Text>
            </TouchableOpacity>
            {/* division tag */}
            <View className='w-[78]'>
              <View className='flex-row justify-center items-center gap-x-3'>
                <View className='border-b border-gray-300 w-full'></View>
                <Text className="text-gray-400 italic w-full">or sign up with</Text>
                <View className='border-b border-gray-300 w-full'></View>
              </View>
            </View>
            <View className='' style={{ width: wp('50%') }}>
              <View className='flex-row justify-center items-center gap-x-2'>
                <TouchableOpacity className={`rounded-xl bg-gray-100  p-2`} style={{ width: wp('41%') }} onPress={() => { }}>
                  <View className='flex-row items-center justify-center gap-x-2'>
                    <Image source={googleIcon} className='w-5 h-5' />
                    <Text className=""> Google</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className={`rounded-xl bg-black  p-2`} style={{ width: wp('41%') }} onPress={() => { }}>
                  <View className='flex-row items-center justify-center gap-x-2'>
                    <Image source={appleLogo} className='w-5 h-5' />
                    <Text className="text-white">Apple</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            
            <View className='space-y-3'>
              <Text className=''>Already have an account?</Text>
              <TouchableOpacity className={``} onPress={() => navigation.navigate('signin')}>
                <View className='flex-row items-center justify-center gap-x-2'>
                  <Text className="text-blue-400">click to sign in</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {/* socials */}
          <View className='flex justify-center items-center pt-3' style={{ paddingTop: hp('1%') }}>
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