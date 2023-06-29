import { View, Text, ScrollView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import i18n from "../locales/localization";

const Settings = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("Jon Doe");

  return (
    <SafeAreaView className="bg-[#3F7A64] h-[100vh]">
      <View className="px-[25px] mb-3">
        <View className=" gap-3 mt-6 justify-between items-center flex flex-row">
          <Text className="text-white text-[24px] font-bold pb-[8px]">
            {i18n.t("settings")}
          </Text>
        </View>
      </View>
      <View>
        <ScrollView className="h-[90vh]  bg-white px-[20px] rounded-[24px] py-[24px]">
          <View className="flex flex-col  items-center">
            <Image source={require("../../assets/profile.png")} />
            <Pressable className="flex gap-2 mt-3 items-center flex-row">
              <MaterialIcons name="edit" color={"#3F7A64"} size={20} />
              <Text className="text-[#3F7A64] text-md font-medium">
                {i18n.t("update_profile_photo")}
              </Text>
            </Pressable>
            <Text className="mt-3 font-bold text-xl">{name}</Text>
            <View className="mt-5 w-full px-1">
              <Pressable
                android_ripple={{ color: '#D4B57C' }}
                onPress={() => {
                  navigation.navigate("PersonalInfo");
                }}
                className="flex flex-row mb-3 justify-between items-center p-1">
                <View className="flex flex-row items-center gap-3">
                  <Ionicons color="#666666" size={22} name="person-sharp" />
                  <Text>{i18n.t("personal_info")}</Text>
                </View>
                <Entypo color="#3F7A64" size={17} name="chevron-right" />
              </Pressable>
              <Pressable
                android_ripple={{ color: '#D4B57C' }}
                onPress={() => navigation.navigate("ChangePassword")}
                className="flex flex-row mb-3 justify-between items-center p-1">
                <View className="flex flex-row items-center gap-3">
                  <MaterialIcons color="#666666" size={22} name="lock" />
                  <Text>{i18n.t("change_password")}</Text>
                </View>
                <Entypo color="#3F7A64" size={17} name="chevron-right" />
              </Pressable>
              <Pressable
                android_ripple={{ color: '#D4B57C' }}
                onPress={() => navigation.navigate("ChangePinCode")}
                className="flex flex-row mb-3 justify-between items-center p-1">
                <View className="flex flex-row items-center gap-3">
                  <FontAwesome5 color="#666666" size={20} name="key" />
                  <Text>{i18n.t("change_transfer_pin")}</Text>
                </View>
                <Entypo color="#3F7A64" size={17} name="chevron-right" />
              </Pressable>
              <Pressable
                android_ripple={{ color: '#D4B57C' }}
                onPress={() => navigation.navigate("LinkedCards")}
                className="flex flex-row mb-3 justify-between items-center p-1">
                <View className="flex flex-row items-center gap-3">
                  <Ionicons color="#666666" size={22} name="card" />
                  <Text>{i18n.t("linked_cards")}</Text>
                </View>
                <Entypo color="#3F7A64" size={17} name="chevron-right" />
              </Pressable>
              <Pressable
                android_ripple={{ color: '#D4B57C' }}
                onPress={() => navigation.navigate("NotificationsSettings")}
                className="flex flex-row mb-3 justify-between items-center p-1">
                <View className="flex flex-row items-center gap-3">
                  <Ionicons
                    name="ios-notifications-circle-outline"
                    size={24}
                    color="#666666"
                  />
                  <Text>{i18n.t("notifications_settings")}</Text>
                </View>
                <Entypo color="#3F7A64" size={17} name="chevron-right" />
              </Pressable>
              <Pressable
                android_ripple={{ color: '#D4B57C' }}
                className="flex flex-row mb-3 justify-between items-center p-1">
                <View className="flex flex-row items-center gap-3">
                  <MaterialIcons name="headset-mic" size={24} color="#666666" />
                  <Text>{i18n.t("contact_support")}</Text>
                </View>
                <Entypo color="#3F7A64" size={17} name="chevron-right" />
            </Pressable>
          </View>
      </View>
    </ScrollView>
      </View >
    </SafeAreaView >
  );
};

export default Settings;
