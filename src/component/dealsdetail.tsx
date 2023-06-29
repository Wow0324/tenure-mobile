import React, { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import MapView, { Marker } from 'react-native-maps';
import i18n from "../locales/localization";
import { imageUrls } from "./dealslist";
import ArrowSolid from "../../assets/svg/location-arrow-solid.svg";

const GOOGLE_MAPS_API_KEY = 'AIzaSyD9vdLrtEtIZ-U2i8tRqMVyrI0J_KbfeDk';

function DealsDetail(props) {
  const navigation = useNavigation();

  const detailData = props.data;
  const requireMap = props.requireMap ? props.requireMap : false;
  const isTravelDeals = props.isTravelDeals ? props.isTravelDeals : false;
  const location = props.location; console.log(location)

  const [region, setRegion] = useState({
    latitude: 33.693780,
    longitude: -88.752110,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  useFocusEffect(
    React.useCallback(() => {
      onGetAddress(location)
    }, [])
  );

  const onGetAddress = async (location: string) => {
    console.log("location", location)
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=${GOOGLE_MAPS_API_KEY}`)
      .then(response => response.json())
      .then(({ results }) => {
        const { lat, lng } = results[0].geometry.location;
        console.log(`Latitude: ${lat}, Longitude: ${lng}`);
        setRegion({ ...region, latitude: lat, longitude: lng });
      })
      .catch(error => console.error(error));
  }

  const onBookNow = () => {
    console.log("book now");
  }
  function TravelInclusion() {
    return detailData.inclusion?.map((a: any, index: number) => {
      return (
        <View key={index} className="flex flex-row items-start gap-2">
          <Text className="font-bold text-base">•</Text>
          <Text>{a}</Text>
        </View>
      )
    })
  }

  function TermConditions() {
    return detailData.termsAndConditions?.map((a: any, index: number) => {
      return (
        <View key={index} className="flex flex-row items-start gap-2">
          <Text className="font-bold text-base">•</Text>
          <Text>{a}</Text>
        </View>
      )
    })
  }

  return (
    <SafeAreaView className="bg-[#3F7A64] h-[100vh] pt-[32px]">
      <View className="h-[10vh] px-[25px] mb-4">
        <View className=" gap-3 mt-3 justify-between items-center flex flex-row">
          <Text className="text-white text-[24px] font-bold pb-[8px]">
            Deals
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
            <Ionicons
              name="ios-notifications-circle-outline"
              size={32}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <ScrollView className="h-[90vh]  bg-white px-[20px] rounded-[24px] py-[24px]">
          <View className="flex flex-row  items-center justify-between align-bottom gap-3">
            <View className="flex flex-row">
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <FontAwesome5
                  color="#3F7A64"
                  size={20}
                  name="arrow-left"
                />
              </TouchableOpacity>
              <Text className="font-semibold text-[17px] pl-2">
                {props.subTitle}
              </Text>
            </View>
            {isTravelDeals ? (
              <TouchableOpacity
                className="flex-row w-[100px] justify-center items-center bg-[#3F7A64] h-[30px] rounded-lg"
                onPress={() => onBookNow()}>
                <Text className="text-white text-[14px] font-bold">
                  {i18n.t("book_now")}
                </Text>
              </TouchableOpacity>
            ) : null}

          </View>
          <View className="mb-40">
            <View className="mt-5 ">
              <View className="flex flex-row items-center gap-4">
                <Image
                  source={imageUrls[props.imageType]}
                  style={{ width: 40, height: 40 }}
                  className="rounded-full"
                />
                <View className="flex flex-col">
                  <Text className="font-bold text-[20px]">
                    {detailData.title}
                  </Text>
                  {isTravelDeals ? (
                    null
                  ) : (
                    <View className="flex flex-row mt-3 items-center">
                      <ArrowSolid />
                      <Text className="text-[12px] text-[#666666] ml-1">{detailData.location}</Text>
                    </View>
                  )}
                </View>
              </View>
              <Text className="mt-6 text-[15px] text-[#00100A]">
                {detailData.status}
              </Text>
            </View>
            <Text className="mt-2 font-semibold text-[13px]">
              {detailData.discountDiscritption}
              {detailData.location}
            </Text>
            <Text className="my-2 text-[13px] text-[#666666]">
              {detailData.expiryDate}
            </Text>
            {requireMap ? (
              <MapView
                style={styles.map}
                initialRegion={region}
                region={region}
              >
                <Marker
                  coordinate={region}
                />
              </MapView>
            ) : (
              null
            )}
            <Text>{detailData.description} This deal includes:</Text>

            <TravelInclusion />

            <Text>Terms and Conditions:</Text>
            <TermConditions />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  map: {
    position: 'relative',
    width: '100%',
    height: 300,
    flex: 1,
    marginVertical: 10
  },
});

export default DealsDetail;
