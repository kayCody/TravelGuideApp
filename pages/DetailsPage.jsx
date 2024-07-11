import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DetailsPage() {
  const route = useRoute();
  const { name, image, description, location, ratings } = route.params;
  return (
    <View className={``}>
      <Image source={image} style={{ height: hp('45%'), width: wp('100%') }} />
      <View className={`p-5 space-y-5`}>
        <View className={`flex-row justify-between items-center`}>
          <View className={``}>
            <Text className={`font-bold text-3xl`}>{name}</Text>
            <View className={`flex-row items-center gap-x-1`}>
              <Ionicons name='location-outline' size={15} color='red' />
              <Text className={`text-am text-gray-500`}>{location}</Text>
            </View>
          </View>
          <View className={``}>
            <Text className={`text-2xl font-semibold`}>$980 / person</Text>
            <View className={`flex-row items-center gap-x-1`}>
              <Ionicons name='star-half-outline' size={15} color='#dfb32f' />
              <Text className={`text-sm text-gray-500`}>{ratings} (1.7k reviews)</Text>
            </View>
          </View>
        </View>
        <View className={`px-2`}>
          <View className={`flex-row justify-center gap-5 `}>
            <TouchableOpacity className={`p-2 border-b`} onPress={() => { }}>
              <Text className={`text-lg text-gray-600`}>Overview</Text>
            </TouchableOpacity>
            <TouchableOpacity className={`p-2`} onPress={() => { }}>
              <Text className={`text-lg text-black`}>Details</Text>
            </TouchableOpacity>
            <TouchableOpacity className={`p-2`} onPress={() => { }}>
              <Text className={`text-lg text-black`}>Cost</Text>
            </TouchableOpacity>
            <TouchableOpacity className={`p-2`} onPress={() => { }}>
              <Text className={`text-lg text-black`}>Review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}