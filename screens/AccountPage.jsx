import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import user from '../assets/images/test-user.jpeg';

export default function AccountsPage({navigation}) {
  const [tabs, setTabs] = useState('Bookings');
  const [lineTabs, setLineTabs] = useState();
  // Rendering of tabs
  const NavButtom = (lineTabs, setLineTabs, title, icons, navLink) => {
    return (
      <TouchableOpacity className={`flex-row justify-between items-center px-2 p-3  ${lineTabs === title ? '' : ''}`} onPress={() => {
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
    <View className={`w-full h-full `}>
      <View className={`relative w-full`}>
        {/* Top section */}
        <View className={`bg-blue-950 px-5 py-3 pt-14 w-full space-y-2 flex- justify-start items-start`} >
          <Image source={user} className={`rounded-full w-14 h-14 border-2 border-white`} />
          <View className={``}>
            <Text className={`text-white font-semibold text-2xl shadow-lg`}>Hannah Afi Papabi</Text>
            <TouchableOpacity className={`flex justify-center items-start`}>
              <Text className={`text-sm text-gray-500`}>View Profile Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Body section */}
        <View className={``}>
          <ScrollView className={`space-y-5 px-4 py-5 pb-5`} style={{height:hp('70%')}} >
            {/* personal information */}
            <View className={`space-y-3`}>
              <Text className={`text-gray-400`}>Personal Information</Text>
              <View className={`rounded-lg  bg-white divide-y divide-gray-200 p-2`}>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'View Profile information', 'person-outline', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
              </View>
            </View>
            {/* Payment */}
            <View className={`space-y-3`}>
              <Text className={`text-gray-400`}>Payment Details / Credit Card </Text>
              <View className={`rounded-lg bg-white divide-y divide-gray-200 p-2`}>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Check payment type / Add card', 'card-sharp', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Subscriptions', 'cash-outline', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
              </View>
            </View>
            {/* settings */}
            <View className={`space-y-3`}>
              <Text className={`text-gray-400`}>Settings</Text>
              <View className={`rounded-lg  bg-white divide-y divide-gray-200 p-2`}>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Language', 'language-sharp', 'profile')}
                  <View className={`flex-row justify-center items-center gap-x-2`}>
                    <Text className={`text-gray-400`}>English</Text>
                    <Ionicons name='arrow-forward-sharp' size={20} />
                  </View>
                </View>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Country', 'globe-outline', 'profile')}
                  <View className={`flex-row justify-center items-center gap-x-2`}>
                    <Text className={`text-gray-400`}>Ghana (GH)</Text>
                    <Ionicons name='arrow-forward-sharp' size={20} />
                  </View>
                </View>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Currency', 'cash-sharp', 'profile')}
                  <View className={`flex-row justify-center items-center gap-x-2`}>
                    <Text className={`text-gray-400`}>USD</Text>
                    <Ionicons name='arrow-forward-sharp' size={20} />
                  </View>
                </View>
              </View>
            </View>
            {/* Support System */}
            <View className={`space-y-3`}>
              <Text className={`text-gray-400`}>Support</Text>
              <View className={`rounded-lg  bg-white divide-y divide-gray-200 p-2`}>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Get help', 'help-circle-outline', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Give Feedback', 'chatbubble-ellipses-outline', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Make a Complaint', 'chatbox-outline', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Emergency Response (Mayday Mayday)', 'help-buoy-outline', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
              </View>
            </View>
            {/* Legal Service / Policies */}
            <View className={`space-y-3`}>
              <Text className={`text-gray-400`}>Legal</Text>
              <View className={`rounded-lg  bg-white divide-y divide-gray-200 p-2`}>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Terms of Service', 'business-outline', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
                <View className={`flex-row justify-between items-center pr-4`}>
                  {NavButtom(lineTabs, setLineTabs, 'Privacy and Data Policy', 'shield-checkmark-sharp', 'profile')}
                  <Ionicons name='arrow-forward-sharp' size={20} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  )
}
