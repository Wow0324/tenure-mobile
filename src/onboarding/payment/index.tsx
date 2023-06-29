import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../../locales/localization";
import Card from "../../../assets/svg/onboarding_payment/card.svg";

const Payment = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-[#3F7A64] h-[100vh] py-[24px]">
      <View className="h-[16vh] px-[32px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[4px]">
            {i18n.t("link_payment_card")}
          </Text>
          <Text className="text-white text-[15px] leading-[20px]">
            {i18n.t("link_payment_card_content")}
          </Text>
        </View>
      </View>
      <View className="h-[84vh] bg-white px-[24px] rounded-[24px]">
        <ScrollView>
          <Text className="font-bold text-[20px] text-[#010101] pt-[24px] pb-[56px]">
            {i18n.t("link_card")}
          </Text>
          <View className="flex-row justify-center mb-[20px]">
            <Card className="w-[100vh]" />
          </View>
          <Text className="text-[15px] leading-[20px] text-[#010101] pb-[40px]">
            {i18n.t("link_card_content")}
          </Text>
          <Pressable
            className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[20px]"
            onPress={() => navigation.navigate("Cardlink")}>
            <Text className="text-white text-[16px] font-bold">
              {i18n.t("link_card")}
            </Text>
          </Pressable>
          <View className="flex-row items-center justify-between w-[100%]">
            <Pressable
              android_ripple={{ color: '#5F9A94' }}
              className="flex-row items-center justify-center w-[100%]"
              onPress={() => navigation.navigate("RoundUp")}>
              <Text className="text-[#3F7A64] text-[16px] font-bold">
                {i18n.t("skip_for_now")}
              </Text>
            </Pressable>
          </View>
          <Text className="text-[12px] leading-[16px] text-[#010101] py-[32px]">
            {i18n.t("link_card__content")}
          </Text>
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

export default Payment;
