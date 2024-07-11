import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import user from '../assets/images/test-user.jpeg';

export default function AccountsPage({navigation}) {
  const [tabs, setTabs] = useState('Bookings');
  const [lineTabs, setLineTabs] = useState();
  const Tabs = (tabs, setTabs, name, icon) => {
    return (
      <TouchableOpacity className={`flex-row gap-x-3 justify-center items-center p-2  ${tabs === name ? 'border-b border-blue-900' : ''}`} onPress={() => { setTabs(name) }} style={{ width: wp('30%') }}>
        <Ionicons name={icon} size={20} color='black' />
        <Text className={`text-sm text-black `}>{name}</Text>
      </TouchableOpacity>
    )
  }
  const NavButtom = (lineTabs, setLineTabs, title, icons, navLink) => {
    return (
      <TouchableOpacity className={`flex-row justify-between items-center px-2 p-3  rounded-lg bg-white ${lineTabs === title ? '' : ''}`} onPress={() => {
        setLineTabs(title)
        navigation.navigate(`${navLink}`)
      }}>
        <View className={`flex-row gap-x-2 items-center`}>
          <Ionicons name={icons} size={20} color='black' />
          <Text className={`text-sm text-black `}>{title}</Text>
        </View>

      </TouchableOpacity>
    )
  }
  return (
    <View className={`absolute z-10 w-full h-full `}>
      <View className={`  relative w-full`}>
        <View className={`bg-blue-950 px-3 py-3 pt-14 w-full space-y-2 flex- justify-center items-center`} >
          <Image source={user} className={`rounded-full w-14 h-14 border-2 border-white`} />
          <View className={``}>
            <Text className={`text-white font-semibold text-2xl shadow-lg`}>Hannah Afi Papabi</Text>
            <TouchableOpacity className={`flex justify-center items-center`}>
              <Text className={`text-sm text-gray-500`}>View Profile Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* TabNavs buttoms */}
        <View className={`flex-row justify-between items-center px-3 bg-white`}>
          {Tabs(tabs, setTabs, 'Bookings', 'briefcase-outline')}
          {Tabs(tabs, setTabs, 'Trips', 'map-outline')}
          {Tabs(tabs, setTabs, 'Info', 'person')}
        </View>
        <View className={``}>
          {tabs === 'Bookings' && (
            <ScrollView className={`space-y-5 px-4 py-2`} >
              <View className={``}>
                {NavButtom(lineTabs, setLineTabs, 'Bookings', '')}
              </View>
            </ScrollView>
          )}
          {tabs === 'Trips' && (
            <ScrollView className={`space-y-5 px-4 py-2`} >
              
            </ScrollView>
          )}
          {tabs === 'Info' && (
            <View className={`space-y-3 px-4 py-5`} >
              {NavButtom(lineTabs, setLineTabs, 'Personal Information', '', 'profile')}
              {NavButtom(lineTabs, setLineTabs, 'Payment Information', '', 'paymentInformation')}
              {NavButtom(lineTabs, setLineTabs, 'Settings', '', 'settings')}
            </View>
          )}
        </View>
      </View>
    </View>
  )
}
