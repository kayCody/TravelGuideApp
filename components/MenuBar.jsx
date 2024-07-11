import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import SideBar from './modals/SideBar';

export default function MenuBar() {
  const [showMenu, setShowMenu] = useState()
  return (
    <View className={`relative p-3`}>
      <View className='flex-row justify-between items-center'>
        <View className='flex-row items-center gap-x-2 pb-3'>
          <TouchableOpacity className={`space-y-0 leading-0`} onPress={() => {
            return (
            <SideBar/>
          )} }>
            <Ionicons name='menu-outline' size={25} color='' />
          </TouchableOpacity>
        </View>
        <View className='relative'>
          <TouchableOpacity className={``}>
            <Ionicons name='notifications-outline' size={25} color='' />
            <View className='bg-red-600 rounded-full p-1 absolute top-1 right-1'></View>
          </TouchableOpacity>
        </View>
      </View>
      {/* text-label & notification icon */}
      <View className={``}>
        <View className=''>
          <Text className='text-2xl font-bold'>Discover your next place for vacation!</Text>
        </View>
      </View>
    </View>
  )
}