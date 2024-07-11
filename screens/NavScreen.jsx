import { SafeAreaView, View, Text } from 'react-native'
import React from 'react'

export default function NavScreen() {
  return (
    <SafeAreaView className={`flex-1 justify-center items-center`}>
      <Text className={`text-3xl`}>Navigation Screen</Text>
    </SafeAreaView>
  )
}