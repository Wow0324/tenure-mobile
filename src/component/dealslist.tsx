import React from "react";
import { Text, View, Pressable, FlatList, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowSolid from "../../assets/svg/location-arrow-solid.svg";

export const imageUrls = [
  require("../../assets/dealsTravel.png"),
  require("../../assets/dealsRetail.png"),
  require("../../assets/dealsHealth.png"),
  require("../../assets/dealsFood.png")
]

function DealsList(props) {
  const navigation = useNavigation();

  return (  
    <FlatList
      data={props.data}
      className="mb-24"
      showsVerticalScrollIndicator={false}
      renderItem={({
        item: {
          title,
          discountDiscritption,
          location,
          expiryDate,
        }
      }) => (
        <Pressable
          onPress={() => navigation.navigate(props.navigation, {location : location})}
          android_ripple={{ color: '#D4B57C' }}
          className="flex border-[#B2B2B2] border-b py-2 flex-row">
        
        <Image
          source={imageUrls[props.imageType]}
          style={{width : 40, height : 40}}
          className="rounded-full"
        />

          <View className="flex flex-col ml-4">
            <Text className="font-bold text-[16px]">{title}</Text>
            {props.imageType == 0 ? (
              <Text className="mt-3 text-[14px]">{location}</Text>
            ) : (
              <View className = "flex flex-row mt-3 items-center">
                <ArrowSolid/>
                <Text className="text-[12px] text-[#666666] ml-1">{location}</Text>
              </View>
            )}
            <Text className="mt-1 text-[14px]">
              {discountDiscritption}
            </Text>
            <Text className="my-2 text-[#666666] text-[12px]">{expiryDate}</Text>
          </View>
        </Pressable>
      )}
    />
  );
}

export default DealsList;
