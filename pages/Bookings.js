import { SafeAreaView,View, Text } from 'react-native'
import React from 'react'

export default function Bookings({route, navigation}) {
  const { place } = route.params;
  return (
    <SafeAreaView>
      <Text>Bookings: { place.name}</Text>
    </SafeAreaView>
  )
}