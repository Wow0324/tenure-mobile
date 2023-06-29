import { Formik } from "formik";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as yup from "yup";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import ConfirmSvg from "../../assets/svg/Reset_password2.svg";

const Confirm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable className="flex-row pt-4" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#3F7A64" />
        <Text className="text-[#3F7A64] text-[16px] pl-2 font-bold">
          {i18n.t("back")}
        </Text>
      </Pressable>
      <View className="flex-row justify-center items-center h-[43vh]">
        <ConfirmSvg width={300} height={300} />
      </View>
      <Text className="text-[#010101] text-[32px] leading-[40px] font-bold text-center pb-[16px]">
        {i18n.t("reset_pw")}
      </Text>
      <Text className="text-[#010101] text-[16px] text-left pb-[24px]">
        {i18n.t("reset_pw_confirm_content")}
      </Text>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={[{ height: 44 }]}
          onPress={() => navigation.navigate("Login")}
          className="bg-[#3F7A64] flex-row items-center justify-center rounded-lg">
          <Text style={styles.btntitle}>{i18n.t("login")}</Text>
        </TouchableOpacity>
      </View>
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
export default Confirm;
