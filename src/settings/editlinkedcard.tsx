import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput, Pressable, ScrollView } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "../locales/localization";

const SettingsEditLinkedCard = ({ route }) => {
  const navigation = useNavigation();
  
  const { card } = route.params ? route.params : '';
  console.log(card.name);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [postalCode, setPostalCode] = useState('');

  useFocusEffect(
    React.useCallback(() => {
      if (card !== '') {
        setName(card.name);
        setNumber(card.number);
        setCVV(card.cvv);
        setExpiry(card.expiry);
        setPostalCode(card.postalCode);
      }
    }, [])
  );

  return (
    <View className="bg-[#3F7A64] h-[100vh] py-[32px]">
      <View className=" pb-4 pt-8 px-[32px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[8px]">
            {i18n.t("edit_payment_card")}
          </Text>
          <Text className="text-white text-[16px] leading-[24px]">
            {i18n.t("edit_payment_card_description")}
          </Text>
        </View>
      </View>
      <View>
        <ScrollView className="h-[100%] bg-white px-[32px] rounded-[24px]">
          <View className="pb-32">
            <View className="flex flex-row items-center gap-3">
              <FontAwesome5
                onPress={() => navigation.goBack()}
                color="#3F7A64"
                size={20}
                name="arrow-left"
              />
              <Text className="font-bold text-[20px] text-[#010101] pt-[24px] pb-[24px]">
                {i18n.t("edit_your_card")}
              </Text>
            </View>
            <TextInput
              value={name}
              label="Card holder name"
              name="cardName"
              placeholder="Card holder name"
              className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2 mb-[16px]"
            />
            <TextInput
              value={number}
              label="Card number"
              name="cardNumber"
              placeholder="Card number"
              className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2 mb-[16px]"
            />
            <View className="flex-row items-center mb-[16px] justify-between">
              <TextInput
                value={expiry}
                label="Expiration date"
                name="expirationDate"
                placeholder="Expiration date"
                className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2 w-[48%]"
              />
              <TextInput
                value={cvv}
                label="CVV"
                name="cvv"
                placeholder="CVV"
                className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2  w-[48%]"
              />
            </View>
            <TextInput
              value={postalCode}
              label="Postal code"
              name="postalCode"
              placeholder="Postal code"
              className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2  w-[48%]"
            />
            <Text className="pt-[32px] font-bold leading-[16px] text-[12px] text-[#666666] pb-[20px]">
              {i18n.t("link_your_card_content1")}{" "}
              <Text className="text-[#3F7A64]">
                {i18n.t("terms_conditions")}
              </Text>{" "}
              {i18n.t("and")}{" "}
              <Text className="text-[#3F7A64]">{i18n.t("privacy_policy")}</Text>
              {i18n.t("link_your_card_content2")}
            </Text>
            <Pressable
              android_ripple={{ color: '#5F9A94' }}
              className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[10px]"
              onPress={() => navigation.navigate("SuccessEditedLinkedCard")}>
              <Text className="text-white text-[16px] font-bold">
                {i18n.t("save_changes")}
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsEditLinkedCard;
