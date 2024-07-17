import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function DetailsPage({route, navigation}) {
  const { place } = route.params;
  const [carouselCurrentTab, setCarouselCurrentTab] = useState(1)
  const [AboutTab, setAboutTab] = useState(1)
  return (
    <View className={`relative`}>
      <Image source={place.image[0]} style={{ height: hp('59%'), width: wp('100%') }} className={``} />
      {/* Carousel Bottoms */}
      <View className={`absolute top-[400px] w-full p-2 rounded-md`}>
        <View className={`flex-row justify-center items-center p-2 space-x-3`}>
          {carouselButtons(carouselCurrentTab, setCarouselCurrentTab, 1)}
          {carouselButtons(carouselCurrentTab, setCarouselCurrentTab, 2)}
          {carouselButtons(carouselCurrentTab, setCarouselCurrentTab, 3)}
          {carouselButtons(carouselCurrentTab, setCarouselCurrentTab, 4)}
          {carouselButtons(carouselCurrentTab, setCarouselCurrentTab, 5)}
        </View>
      </View>
      {/* Navigations */}
      <View className={`absolute top-[45px] w-full`}>
        <View className={`flex-row justify-between items-center p-4 px-6`}>
          <TouchableOpacity className={`bg-[#000000] shadow-lg rounded-full w-8 h-8 flex justify-center items-center`} onPress={()=>navigation.goBack()}>
            <Ionicons name='arrow-back-outline' size={25} color='white' />
          </TouchableOpacity>
          <View className={`flex-row justify-center items-center gap-x-2`}>
            <TouchableOpacity className={`bg-[#000000] shadow-lg rounded-full w-8 h-8 flex justify-center items-center`} onPress={() => {}}>
              <Ionicons name='heart-outline' size={25} color='white' />
            </TouchableOpacity>
            <TouchableOpacity className={`bg-[#000000] shadow-lg rounded-full w-8 h-8 flex justify-center items-center`} onPress={() => {}}>
              <Ionicons name='share-outline' size={25} color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* body / details of Places */}
      <View className={`absolute top-[450px] w-full h-full bg-white  px-2`} style={{height:hp('100%')}}>
        <View className={`flex justify-center items-center p-2`}>
          <TouchableOpacity onPress={()=>{}} className={`bg-gray-200 w-20 p-[2px] rounded`}></TouchableOpacity>
        </View>
        <View className={``}>
          <View className={`flex-row justify-between items-center px-2`}>
            <Text className={`text-3xl font-bold font-butterfly_kids]`}>{place.name}</Text>
            <View className={``}>
              <Text className={`flex-row items-center gap-x-1`}>
                <Ionicons name='cash' size={15} color='#bebcb7' />
                <Text className={`text-[#000000] text-xl`}>$25.5/person</Text>
              </Text>
            </View>
          </View>
          <View className={``}>
            <View className={`flex-row justify-between items-center px-2`}>
              <View className={`flex-row items-center gap-x-1`}>
                <Ionicons name='location-outline' size={15} color='#bebcb7' />
                <Text className={`text-[#bebcb7] text-xs`}>{place.location}</Text>
              </View>
              <TouchableOpacity className={`flex-row  justify-center items-center gap-x-2`} onPress={() => { }}>
                <Ionicons name='map-outline' size={15} color='#51c11e' />
                <Text className={`text-[#51c11e]`}>Get Map Direction</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Bottom Tabs here */}
          <ScrollView horizontal={true} className={`mt-2 gap-x-2 px-2`}>
            <TouchableOpacity className={`bg-gray-100 rounded p-2 flex-row items-center justify-center gap-x-1`}>
              <Ionicons name='star-outline' size={15} color='#bebcb7' />
              <Text className={`text-[#bebcb7] text-xs`}>{place.ratings}(ratings)</Text>
            </TouchableOpacity>
            <TouchableOpacity className={`bg-gray-100 rounded p-2 flex-row items-center justify-center gap-x-1`}>
              <Ionicons name='person-outline' size={15} color='#bebcb7' />
              <Text className={`text-[#bebcb7] text-xs`}>Tour Guide available</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* line divider */}
        <View className={`bg-gray-100 p-[1px] mt-3 mb-2`}></View>
        {/* About the Place Section */}
        <View className={`px-2`}>
          <View className={`flex-row justify-between items-center`}>
            <View className={`flex-row items-center gap-x-3`}>
              {aboutTabs(AboutTab, setAboutTab, 1, 'Description')}
              {aboutTabs(AboutTab, setAboutTab, 2, 'Reviews (9.2k)')}
            </View>
            {aboutTabs(AboutTab, setAboutTab, 3, 'Weather')}
          </View>
          <ScrollView className={`mt-2`} style={{ height: hp('20%') }}>
            {AboutTab === 1 && (
              <View className={`flex-row items-center gap-x-3`}>
                <Text className={`text-sm text-justify`}>{place.description}</Text>
              </View>
            )}
            {AboutTab === 2 && (
              <View className={`flex-row items-center gap-x-3`}>
                <Text className={`text-sm`}>
                  {place.reviews ? <>
                    {place.reviews.length > 0 ? (
                      place.reviews.map((review, index) => (
                        <View key={index} className={`flex-row items-center gap-x-3`}>
                          <Text className={`text-sm`}>{review.comment}</Text>
                          <Text className={`text-[#bebcb7] text-xs`}>{review.rating} / 5</Text>
                        </View>
                      ))
                    ) : (<Text className={``}>No reviews on {place.name} yet</Text>)}
                  </>:<Text className={`text- italic`}> No such filed in the database</Text>}
                </Text>
              </View>
            )}
            {AboutTab === 3 && (
              <View className={`flex-row items-center gap-x-3`}>
                <Text className={`text-sm`}>
                  {place.weather ? <>
                    {place.reviews.length > 0 ? (
                      place.reviews.map((review, index) => (
                        <View key={index} className={`flex-row items-center gap-x-3`}>
                          <Text className={`text-sm`}>{review.comment}</Text>
                          <Text className={`text-[#bebcb7] text-xs`}>{review.rating} / 5</Text>
                        </View>
                      ))
                    ) : (<Text className={``}>No reviews on {place.name} yet</Text>)}
                  </> : <Text className={`text- italic`}> No weather data provided yet</Text>}
                </Text>
              </View>
            )}
          </ScrollView>
        </View>
        <View className={`w-full flex-row  justify-between items-center px-3 `}>
          <TouchableOpacity key={place.id} className={`flex-row items-center justify-center gap-x-2 rounded-lg shadow-md bg-[#000000] p-3 w-full`} onPress={() => navigation.navigate('bookings', { place })}>
            <Text className={`text-center text-sm text-white`}>Book Now</Text>
            <Ionicons name='arrow-forward-sharp' size={20} color='white' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
//



// About the PLACE  button tabs
const aboutTabs = (aboutTab, setAboutTab, id, title) => {
  return (
    <TouchableOpacity onPress={() => { setAboutTab(id) }} className={`${aboutTab === id ? 'border-b border-black' : ''}`}><Text className={`text-md italic ${aboutTab === id ? 'text-[#2a3ab3] border-b border-black':'text-gray-400'}`}>{title}</Text></TouchableOpacity>
  )
}

//Carousel Bottom Tabs
const carouselButtons = (carouselCurrentTab, setCarouselCurrentTab, id) => {
  return (
    <TouchableOpacity key={id} className={`rounded-full w-2 h-2 ${carouselCurrentTab === id?'bg-white':'bg-gray-700'}`} onPress={() => { setCarouselCurrentTab(id) }}></TouchableOpacity>
  )
} 