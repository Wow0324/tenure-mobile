import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../../locales/localization";
import SuccessIcon from "../../../assets/svg/onboarding_payment/success_icon.svg";

const RoundUpConfirm = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#3F7A64] h-[100vh] py-[32px]">
      <View className="h-[16vh] px-[24px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[4px]">
            {i18n.t("round_up")}
          </Text>
          <Text className="text-white text-[15px] leading-[20px]">
            {i18n.t("round_up_content")}
          </Text>
        </View>
      </View>
      <View className="h-[84vh] bg-white px-[24px] rounded-[24px]">
        <View>
          <Text className="font-bold text-[20px] text-[#010101] pt-[24px] pb-[56px]">
            {i18n.t("round_up_ammounts")}
          </Text>
          {/* <View className=" h-[40vh] flex-row justify-center items-center w-[100%]"> */}
          <View className="flex-row justify-center items-center mb-[35px] border border-2 border-[#018485] rounded-xl h-[200px] px-4">
            <View>
              <View className="flex-row justify-center">
                <SuccessIcon />
              </View>
              <Text className="pt-[40px] text-[#018485]">
                {i18n.t("round_up_amount_successfully_set")}
              </Text>
            </View>
          </View>
          {/* </View> */}
          <Pressable
            className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[20px] mt-4"
            onPress={() => navigation.navigate("Goal")}>
            <Text className="text-white text-[16px] font-bold">
              {i18n.t("next")}
            </Text>
          </Pressable>
          <View className="flex-row justify-center self-center w-[100%]">
            <Pressable
              className="flex-row items-center justify-center"
              onPress={() => navigation.navigate("Payment")}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={24}
                color="#3F7A64"
              />
              <Text className="text-[#3F7A64] text-[16px] font-bold">
                {i18n.t("previous_step")}
              </Text>
            </Pressable>
          </View>
        </View>
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

export default RoundUpConfirm;
