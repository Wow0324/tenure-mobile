import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../../locales/localization";
import RadioButtonRN from "radio-buttons-react-native";
import { ScrollView } from "react-native-gesture-handler";

const RoundUp = () => {
  const navigation = useNavigation();

  return (
    <View className="bg-[#3F7A64] h-[100vh] py-[32px]">
      <View className="h-[14vh] px-[24px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[4px]">
            {i18n.t("round_up")}
          </Text>
          <Text className="text-white text-[15px] leading-[20px]">
            {i18n.t("round_up_content")}
          </Text>
        </View>
      </View>
      <View className="h-[86vh] bg-white px-[24px] rounded-[24px]">
        <ScrollView>
          <Text className="font-bold text-[20px] text-[#010101] py-[24px]">
            {i18n.t("round_up_ammounts")}
          </Text>
          <View>
            <Text className="text-[16px] font-medium pb-[8px]">
              {i18n.t("max_weekly_round_up_amount")}
            </Text>
            <TextInput
              label="Enter your maximum weekly round-up amount"
              name="max_weekly_round_up_amount"
              placeholder="Enter an amount"
              className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2 mb-[16px]"
            />
          </View>
          <View className="mb-[16px]">
            <Text className="text-[16px] font-medium pb-[8px]">
              {i18n.t("round_up_settings")}
            </Text>
            <RadioButtonRN
              data={i18n.t("round_up_settings_itmes")}
              activeColor="#3F7A64"
              box={false}
              selectedBtn={e => console.log(e)}
            />
          </View>
          <View>
            <Text className="text-[16px] font-medium pb-[8px]">
              {i18n.t("nearest_round_up_amount")}
            </Text>
            <TextInput
              label="Set custom nearest round-up amount"
              name="nearest_round_up_amount"
              placeholder="Enter an amount"
              className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2 mb-[16px]"
            />
          </View>
          <Pressable
            className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[16px]"
            onPress={() => {
              navigation.navigate("RoundUpConfirm");
            }}>
            <Text className="text-white text-[16px] font-bold">
              {i18n.t("set_rounded_up_amount")}
            </Text>
          </Pressable>
          <View className="w-[100%] flex-row justify-between items-center pb-[60px]">
            <Pressable
              className="flex-row items-center"
              onPress={() => navigation.navigate("Payment")}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={30}
                color="#3F7A64"
              />
              <Text className="text-[#3F7A64] text-[16px] font-bold">
                {i18n.t("previous_step")}
              </Text>
            </Pressable>
            <Pressable
              className="flex-row items-center"
              onPress={() => navigation.navigate("Goal")}>
              <Text className="text-[#3F7A64] text-[16px] font-bold">
                {i18n.t("skip_for_now")}
              </Text>
            </Pressable>
          </View>
        </ScrollView>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown1RowStyle: {
    backgroundColor: "bule",
    borderBottomColor: "transparent",
    paddingHorizontal: 10,
  },
  dropdown1RowTxtStyle: { color: "#010101", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "white" },
  dropdown2BtnStyle: {
    // flex: 1,
    height: 40,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#B2B2B2",
  },
  dropdown2BtnTxtStyle: {
    color: "#B2B2B2",
    // textAlign: "right",
  },
});

export default RoundUp;
