import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default function ChatScreen() {
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        className={`flex-1`}
      />
      <View className={`p-3`}>
        {/* search bar */}
        <View className='flex-row gap-2'>
          <View className={`p-2 flex-row gap-x-2 rounded-lg bg-gray-200 ml-1`}>
            <Ionicons name='search' size={20} />
            <TextInput placeholder='search here e.g.: places, location, tourist site etc...' style={{ width: wp('70%') }} />
          </View>
          <TouchableOpacity onPress={() => { console.log('to display modal list of options for search') }} className={`p-2 rounded-lg bg-blue-950`}><Ionicons name='options-outline' size={20} color='white' /></TouchableOpacity>
        </View>
      </View>

    </View>
  )
}