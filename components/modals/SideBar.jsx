import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import user from '../../assets/images/test-user.jpeg';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SideBar() {
const [lineTabs, setLineTabs] = useState();
  return (
    <View className={`absolute z-10 w-full h-full bg-black bg-transparent backdrop-blur-xs hidden`}>
      <View className={` bg-blue-950 relative space-y-4`} style={{ width: wp('70%') }}>
        <TouchableOpacity className={`absolute top-10 right-4 rounded-md  bg-white bg-opacity-25`}><Ionicons name='close-outline' size={20} color='black' /></TouchableOpacity>
        <View className={`px-3 py-3 pt-14 w-full space-y-2`} >
          <Image source={user} className={`rounded-full w-14 h-14 border-2 border-white`} />
          <View className={``}>
            <Text className={`text-white font-semibold text-2xl shadow-lg`}>Hannah Afi Papabi</Text>
            <TouchableOpacity className={``}>
              <Text className={`text-sm text-gray-500`}>View Profile Account</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Nav buttoms */}
        <View className={`bg-white`}>
          <ScrollView className={`space-y-3 px-4 py-2`} style={{ height: hp('60%') }}>
            <View className={``}>
              <Text className={`text-lg text-gray-400`}>Accessibles</Text>
              <View className={`rounded-lg  flex justify-center  space-y-2`}>
                {NavTabs(lineTabs, setLineTabs, 'Itinary', 'pricetags-outline')}
                {NavTabs(lineTabs, setLineTabs, 'Favorites', 'heart-outline')}
                {NavTabs(lineTabs, setLineTabs, 'Forums', 'chatbubbles-outline')}
              </View>
            </View>
            <View className={``}>
              <Text className={`text-lg text-gray-400`}>Tools</Text>
              <View className={`mt rounded-lg  flex justify-center  space-y-2`}>
                {NavTabs(lineTabs, setLineTabs, 'Curreny Converter', 'cash-outline')}
                {NavTabs(lineTabs, setLineTabs, 'Compass Navigation', 'compass-outline')}
                {NavTabs(lineTabs, setLineTabs, 'Emergency Access', 'shield-half-sharp')}
              </View>
            </View>
          </ScrollView>
          <View className={` space-y-3 px-4 border-t border-gray-300`}>
            <View className={``}>
              <Text className={`text-lg text-gray-500`}></Text>
              <View className={`mt-2 rounded-lg  flex justify-center  space-y-1`}>
                {NavTabs(lineTabs, setLineTabs, 'Share to a friend', 'share-social-outline')}
                {NavTabs(lineTabs, setLineTabs, 'logout', 'log-out-outline')}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
const NavTabs = (lineTabs, setLineTabs, title, icons, profeature) => {
  return (
    <TouchableOpacity className={`flex-row gap-x-2 items-center  rounded-lg ${lineTabs === title ?'':''}`} onPress={()=>{setLineTabs(title)}}>
      <Ionicons name={icons} size={20} color='black' />
      <Text className={`text-lg text-black `}>{title}</Text>
    </TouchableOpacity>
  )
}