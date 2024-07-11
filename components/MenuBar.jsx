import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MenuBar() {
  const [showMenu, setShowMenu] = useState()
  return (
    <View className={`relative p-3`}>
      <View className='flex-row justify-end items-center'>
        
        <View className='relative'>
          <TouchableOpacity className={``}>
            <Ionicons name='notifications-outline' size={25} color='' />
            <View className='bg-red-600 rounded-full p-1 absolute top-1 right-1'></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}