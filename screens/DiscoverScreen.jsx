import {ScrollView, SafeAreaView, View, Text, TouchableOpacity, TextInput, ImageBackground, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GooglePlaces from '../conf/GooglePlaces';

export default function HomeScreen({navigation}) {
  const [currentTab, setCurrentTab] = useState('All');
  return (
    <SafeAreaView className={`flex-1 bg-white`}>
      <View className={``}>
        {/* Top style / Design */}
        <View className={`relative p-3`}>
          <View className='flex-row justify-between items-center'>
            <View className='flex-row items-center gap-x-2 pb-3'>
              <TouchableOpacity className={`space-y-0 leading-0`} onPress={() => {}}>
                <Ionicons name='menu-outline' size={25} color='' />
              </TouchableOpacity>
            </View>
            <View className='relative'>
              <TouchableOpacity className={``}>
                <Ionicons name='notifications-outline' size={25} color='' />
                <View className='bg-red-600 rounded-full p-1 absolute top-1 right-1'></View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* text-label & notification icon */}
        <View className={`px-3`}>
          <View className=''>
            <Text className='text-2xl font-bold'>Where do you want spend your next Vacation?</Text>
          </View>
        </View>
        <View className='px-3'>
          <View className={`p-2 flex-row gap-x-2 rounded-lg bg-white ml-1 justify-center items-center shadow-md`}>
            <Ionicons name='search' size={20} />
            <TextInput placeholder='search here e.g.: places, location, tourist site etc...' style={{ width: wp('70%') }} />
            <TouchableOpacity onPress={() => { console.log('to display modal list of options for search') }} className={`p-2 rounded-lg bg-blue-950`}><Ionicons name='options-outline' size={20} color='white' /></TouchableOpacity>
          </View>
        </View>
        {/* Body style / design */}
        <ScrollView className='p-3 space-y-8'>
          {/* Recommendations */}
          <View className=''>
            <Text className={`text-xl font-semibold`}>Explore Places</Text>
            {/* Categories */}
            <View className=''>
              <ScrollView horizontal={true} style={{ width: wp('95%') }} className='py-2'>
                <View className='flex-row gap-x-3 justify-center items-center'>
                  {CatTabs(currentTab, setCurrentTab, 'All')}
                  {CatTabs(currentTab, setCurrentTab, 'Popular')}
                  {CatTabs(currentTab, setCurrentTab, 'Recommended')}
                  {CatTabs(currentTab, setCurrentTab, 'Most visited')}
                  {CatTabs(currentTab, setCurrentTab, 'Activities')}
                </View>
              </ScrollView>
              <View className=''>
                {currentTab === 'All' && (
                  <ScrollView className={``} style={{}} horizontal={true}>
                    {GooglePlaces.map(place => (
                      <TouchableOpacity key={place.id} onPress={() => navigation.navigate('details', { place })} className={`relative flex gap-x-3 mr-2`}>
                        <Image source={place.image[0]} className={`rounded-xl shadow-lg p-2`} style={{ height: hp('10%'), width: wp('55%') }} />
                        <View className='absolute top-0 right-0  p-2 '>
                          <View className='rounded-full w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-5'>
                            <TouchableOpacity><Ionicons name='heart-outline' size={20} color='white' /></TouchableOpacity>
                          </View>
                        </View>
                        <View className=''>
                          <Text className='text-lg font-bold'>{place.name}</Text>
                          <View className='flex-row items-center'>
                            <Ionicons name='location' size={15} color='red' />
                            <Text className='text-sm text-gray-400'>{place.location}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                )}
                {currentTab === 'Popular' && (
                  <ScrollView className={``} style={{}} horizontal={true}>
                    {GooglePlaces.map(place => (
                      <View className={``} key={place.id}>
                        {place.ratings > 4 && (
                          <TouchableOpacity key={place.id} onPress={() => navigation.navigate('details', { place })} className={`relative flex gap-x-3 mr-2`}>
                            <Image source={place.image[0]} className={`rounded-xl shadow-lg p-2`} style={{ height: hp('10%'), width: wp('55%') }} />
                            <View className='absolute top-0 right-0  p-2 '>
                              <View className='rounded-full w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-5'>
                                <TouchableOpacity><Ionicons name='heart-outline' size={20} color='white' /></TouchableOpacity>
                              </View>
                            </View>
                            <View className=''>
                              <Text className='text-lg font-bold'>{place.name}</Text>
                              <View className='flex-row items-center'>
                                <Ionicons name='location' size={15} color='red' />
                                <Text className='text-sm text-gray-400'>{place.location}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                    ))}
                  </ScrollView>
                )}
                {currentTab === 'Recommended' && (
                  <ScrollView className={``} style={{}} horizontal={true}>
                    {GooglePlaces.map(place => (
                      <View className={``} key={place.id}>
                        {place.ratings > 3  < 4 && (
                          <TouchableOpacity key={place.id} onPress={() => navigation.navigate('details', { place })} className={`relative flex gap-x-3 mr-2`}>
                            <Image source={place.image[0]} className={`rounded-xl shadow-lg p-2`} style={{ height: hp('10%'), width: wp('55%') }} />
                            <View className='absolute top-0 right-0  p-2 '>
                              <View className='rounded-full w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-5'>
                                <TouchableOpacity><Ionicons name='heart-outline' size={20} color='white' /></TouchableOpacity>
                              </View>
                            </View>
                            <View className=''>
                              <Text className='text-lg font-bold'>{place.name}</Text>
                              <View className='flex-row items-center'>
                                <Ionicons name='location' size={15} color='red' />
                                <Text className='text-sm text-gray-400'>{place.location}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                    ))}
                  </ScrollView>
                )}
                {currentTab === 'Most Visited' && (
                  <ScrollView className={``} style={{}} horizontal={true}>
                    <Text className=''>Most Visited</Text>
                  </ScrollView>
                )}
                {currentTab === 'Activities' && (
                  <ScrollView className={``} style={{}} horizontal={true}>
                    <Text className=''>Activities</Text>
                  </ScrollView>
                )}
              </View>
            </View>
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
              {GooglePlaces.map(place => (
                <TouchableOpacity key={place.id} onPress={() => navigation.navigate('details', {place})} className={`relative flex-row  bg-[#f1f2f4]  rounded-xl mb-2`} style={{ width: wp('94%') }}>
                  <Image source={place.image[0]} className={`rounded-xl shadow-lg `} style={{ height: hp('10%'), width: wp('25%') }} />
                  <View className='absolute top-0 right-0  p-2 rounded-full'>
                    <View className='rounded-full w-8 h-8 flex items-center justify-center bg-gray-500 bg-opacity-5'>
                      <TouchableOpacity><Ionicons name='heart-outline' size={20} color='white' /></TouchableOpacity>
                    </View>
                  </View>
                  <View className='ml-2'>
                    <View className='space-y-2 p-1'>
                      <Text className='text-lg text-black font-bold'>{place.name}</Text>
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
    <TouchableOpacity className={`rounded-xl p-2 flex justify-center items-center ${currentTab === title && 'border-b border-black' }`}  onPress={()=>{setCurrentTab(title)}}>
      <Text className={`${currentTab === title ? 'text-[#000000]' : 'text-gray-300'}`}>{title}</Text>
    </TouchableOpacity>
  )
}