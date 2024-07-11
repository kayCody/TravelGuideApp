import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Trips() {
  const [trips, setTrips] = useState([])
  return (
    <SafeAreaView className={`flex-1 justify-center items-center`}>
      {trips > 0 ? (
        <View className={`p-3`}>
          <Text>My Trips</Text>
          {trips.map((trip, index) => (
            <TouchableOpacity key={index} className={`border-b-1 border-gray-200 p-2`}>
              <Text>{trip.name}</Text>
              <Text>{trip.location}</Text>
              <Text>{trip.date}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
          <View className={`p-3 flex justify-center items-center space-y-2`}>
            <Text>No Trips Planned out yet</Text>
            <TouchableOpacity className={`rounded-lg p-3 bg-blue-950`}>
              <Text className={`flex-row justify-center items-center text-white gapx-x-3`}>Plan a Trip with our AI</Text>
            </TouchableOpacity>
            <Text className={`text-sm text-gray-400 text-center`}>plan a trip with our well trained AI that gives you a well planned out and stress free vacation of a life enjoyment and memory creation</Text>
          </View>
      )}
    </SafeAreaView>
  )
}