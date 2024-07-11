import {ScrollView, SafeAreaView, View, Text, TouchableOpacity, TextInput, ImageBackground, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { user } from '../assets/images/test-user.jpeg';
import {Menubar} from '../components'
import lake from '../assets/images/lake.jpg';
import SideBar from '../components/modals/SideBar';
import { GooglePlaces } from '../conf';



export default function HomeScreen({navigation}) {
  const Places = GooglePlaces;
  const [currentTab, setCurrentTab] = useState('All');
  return (
    <SafeAreaView className={`flex-1 bg-white`}>
      <View className={``}>
        {/* Top style / Design */}
        <Menubar />
        <View className='space-y-2 p-3  bg-gray-'>
          {/* Categories */}
          <View className=''>
            <ScrollView horizontal={true} style={{ width: wp('95%') }} className='py-2'>
              <View className='flex-row gap-x-3 justify-center items-center'>
                {CatTabs(currentTab, setCurrentTab, 'All')}
                {CatTabs(currentTab, setCurrentTab, 'Restaurant')}
                {CatTabs(currentTab, setCurrentTab, 'Hotels')}
                {CatTabs(currentTab, setCurrentTab, 'Flights')}
                {CatTabs(currentTab, setCurrentTab, 'Activities')}
              </View>
            </ScrollView>
          </View>
        </View>
        {/* Body style / design */}
        <ScrollView className='p-3 space-y-8'>
          {/* Recommendations */}
          <View className=''>
            <View className='flex-row justify-between items-center py-2'>
              <Text className='text-xl font-bold'>Recommendations just for you </Text>
              <TouchableOpacity className={``}>
                <Text className='text-sm text-blue-400'>See all</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              className=''
              horizontal
              data={places}
              renderItem={({ item }) => (
                <TouchableOpacity key={item.id} onPress={() => navigation.navigate('details', item)} className={`relative flex gap-x-3 mr-2`}>
                  <Image source={item.image} className={`rounded-xl shadow-lg p-2`} style={{ height: hp('10%'), width: wp('55%') }} />
                  <View className='absolute top-0 right-0  p-2 '>
                    <View className='rounded-full w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-5'>
                      <TouchableOpacity><Ionicons name='heart-outline' size={20} color='white' /></TouchableOpacity>
                    </View>
                  </View>
                  <View className=''>
                    <Text className='text-lg font-bold'>{item.name}</Text>
                    <View className='flex-row items-center'>
                      <Ionicons name='location' size={15} color='red' />
                      <Text className='text-sm text-gray-400'>{item.location}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* popular places */}
          <View className='space-y-1'>
            <View className='flex-row justify-between items-center'>
              <Text className='text-xl font-bold'>Browse places & Activities </Text>
              <TouchableOpacity className={``}>
                <Text className='text-sm text-blue-400'>See all</Text>
              </TouchableOpacity>
            </View>
            <ScrollView className='' style={{ height: hp('35%') }}>
              {Places.map((place, index) => (
                <TouchableOpacity onPress={() => navigation.navigate('details', {place})} className={`relative flex-row  bg-[#103f69]  rounded-xl mb-2`} style={{ width: wp('94%') }}>
                  <Image source={item.image} className={`rounded-xl shadow-lg `} style={{ height: hp('10%'), width: wp('25%') }} />
                  <View className='absolute top-0 right-0  p-2 rounded-full'>
                    <View className='rounded-full w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-5'>
                      <TouchableOpacity><Ionicons name='heart-outline' size={20} color='white' /></TouchableOpacity>
                    </View>
                  </View>
                  <View className='ml-2'>
                    <View className='space-y-2 p-1'>
                      <Text className='text-lg text-white font-bold'>{place.name}</Text>
                      <View className='flex-row items-center'>
                        <Ionicons name='location' size={15} color='red' />
                        <Text className='text-sm text-gray-400'>{place.location}</Text>
                      </View>
                      <View className='flex-row items-center gap-x-1'>
                        <Ionicons name='star-half' size={15} color='yellow' />
                        <Text className='text-sm text-gray-400'>{place.ratings}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const CatTabs = (currentTab, setCurrentTab, title) => {
  return (
    <TouchableOpacity className={`rounded-xl p-2 ${currentTab === title ? 'bg-[#103f69] shadow-b-xl':'bg-gray-300'}  flex justify-center items-center`} style={{ width: wp('30%') }} onPress={()=>{setCurrentTab(title)}}>
      <Text className='text-white'>{title}</Text>
    </TouchableOpacity>
  )
}