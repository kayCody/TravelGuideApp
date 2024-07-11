import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import location from '../assets/images/location.png'

export default function LocationScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className={`flex-1 items-center justify-center`}>
      <View className={`flex justify-center items-center`}>
        <Image source={location} className="w-72 h-52" />
        <View className="py-24 px-10">
          <Text className='text-center font0 bold text-xl'>Use the button below to turn on location for this Application</Text>
        </View>
        <View className="flex-row space-x-3">
          <View className="bg-gray-500 rounded-full w-3 h-3 "></View>
          <View className="bg-gray-800 rounded-full w-3 h-3 "></View>
        </View>
        <TouchableOpacity onPress={()=>navigation.replace('signin')} className='mt-10 bg-blue-950 rounded-md p-3' ><Text className="text-white">Turn on Location Services</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}