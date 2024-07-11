import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import notification from '../assets/images/notification.png';
import { useNavigation } from '@react-navigation/native';
export default function NotificationScreen() {
  const navigation = useNavigation()
  return (
    <SafeAreaView className={`flex-1 items-center justify-center`}>
      <View className={`flex justify-center items-center`}>
        <Image source={notification} className="w-72 h-52" />
        <View className="py-24 px-10">
          <Text className='text-center font0 bold text-xl'>Use the button below to turn on notication for this Application</Text>
        </View>
        <View className="flex-row space-x-3">
          <View className="bg-gray-800 rounded-full w-3 h-3 "></View>
          <View className="bg-gray-500 rounded-full w-3 h-3 "></View>
        </View>
        <TouchableOpacity onPress={()=>navigation.replace('location')} className='mt-10 bg-blue-950 rounded-md p-3' ><Text className="text-white">Turn on Notification</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}