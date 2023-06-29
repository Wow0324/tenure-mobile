import { Formik } from "formik";
import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import EmailSentSvg from "../../assets/svg/Email_sent.svg";

const EmailSent = () => {
  const navigation = useNavigation();

  const handleEmailSent = () => {
    navigation.navigate("ResetPassword");

    // axios.post(`${API_BASIC_URL}/emailsent`, email)
    // .then((res) => {
    //   console.log("success")
    // })
    // .catch((error) => {
    //   console.log("error")
    // })

  }
  return (
    <View style={styles.container}>
      <Pressable className="flex-row pt-4" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#3F7A64" />
        <Text className="text-[#3F7A64] text-[16px] pl-2 font-bold">
          {i18n.t("back")}
        </Text>
      </Pressable>
      <View className="flex-row justify-center items-center h-[43vh]">
        {/* <Image source={require("../../assets/image/email_sent.png")} /> */}
        <EmailSentSvg width={300} height={300} />
      </View>
      <Text className="text-[#010101] text-[32px] leading-[40px] font-bold text-center pb-[16px]">
        {i18n.t("email_sent")}
      </Text>
      <Text className="text-[#010101] text-[16px] text-left pb-[24px]">
        {i18n.t("email_sent_content")}
      </Text>
      <Text className="text-[16px] text-center">
        {i18n.t("no_link")}{" "}
        <Text
          className="text-[#3F7A64]"
          onPress={() => handleEmailSent()}>
          {i18n.t("resend_link")}
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 42,
    paddingVertical: 20,
    backgroundColor: "white",
    height: "100%",
  },
  imageCenter: {
    flexDirection: "row",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#5A5A5A",
    textAlign: "center",
    paddingBottom: 20,
  },
  content: {
    fontSize: 16,
    color: "#5A5A5A",
    textAlign: "center",
    paddingVertical: 20,
  },
  luckyContent: {
    fontSize: 20,
    color: "#5A5A5A",
    textAlign: "center",
    paddingBottom: 20,
  },
  input: {
    height: 44,
    borderColor: "#3A3A3C",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  btntitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "#6662F5",
  },
  back: {
    color: "#5A5A5A",
  },
});
export default EmailSent;
