import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import i18n from "../../locales/localization";
import SuccessIcon from "../../../assets/svg/onboarding_payment/success_icon.svg";

const CardConfirm = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#3F7A64] h-[100vh] py-[32px]">
      <View className="h-[16vh] px-[24px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[4px]">
            {i18n.t("link_payment_card")}
          </Text>
          <Text className="text-white text-[15px] leading-[24px]">
            {i18n.t("link_payment_card_content")}
          </Text>
        </View>
      </View>
      <View className="h-[84vh] bg-white px-[32px] rounded-[24px]">
        <View>
          <Text className="font-bold text-[20px] text-[#010101] pt-[24px] pb-[40px]">
            {i18n.t("link_card")}
          </Text>
          {/* <View className=" h-[40vh] flex-row justify-center items-center w-[100%]"> */}
          <View className="flex-row justify-center items-center mb-[24px] border border-2 border-[#018485] rounded-xl h-[200px] px-4">
            <View>
              <View className="flex-row justify-center">
                <SuccessIcon />
              </View>
              <Text className="pt-[40px] text-[#018485]">
                {i18n.t("payment_linked_success")}
              </Text>
            </View>
          </View>
          {/* </View> */}
          <Pressable
            android_ripple={{ color: '#5F9A94' }}
            className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[20px] mt-16"
            onPress={() => navigation.navigate("RoundUp")}>
            <Text className="text-white text-[16px] font-bold">
              {i18n.t("next")}
            </Text>
          </Pressable>
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

export default CardConfirm;
