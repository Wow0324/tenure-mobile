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
import ForgotPasswordSvg from "../../assets/svg/Reset_password.svg";

const ForgotPassword = () => {
  const passwordInputRef = useRef(null);

  const navigation = useNavigation();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .label("Email")
      .required("Email is required")
      .email("Email is invalid"),
  });

  const emailSent = () => {
    // axios.post(`${API_BASIC_URL}/forgotpassword`, email)
    // .then((res) => {
    //   console.log("success")
    // })
    // .catch((error) => {
    //   console.log("error")
    // })
  };

  return (
    <View style={styles.container}>
      <Pressable className="flex-row pt-4" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#3F7A64" />
        <Text className="text-[#3F7A64] text-[16px] pl-2 font-bold">
          {i18n.t("back")}
        </Text>
      </Pressable>
      <View className="flex-row justify-center items-center h-[43vh]">
        {/* <Image source={require("../../assets/image/Lock.png")} /> */}
        <ForgotPasswordSvg width={300} height={300} />
      </View>
      <Text className="text-[#010101] text-[32px] leading-[40px] font-bold text-center pb-[16px]">
        {i18n.t("forgot_password")}
      </Text>
      <Text className="text-[#010101] text-[16px] text-left pb-[24px]">
        {i18n.t("forgot_pw_content")}
      </Text>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={emailSent}>
        {({ isSubmitting, handleSubmit }) => (
          <View>
            <View>
              <TextInput
                autoCapitalize="none"
                disabled={isSubmitting}
                keyboardType="email-address"
                label="Email"
                name="email"
                placeholder="Enter Email"
                style={styles.input}
                returnKeyType={"next"}
                onSubmitEditing={() => {
                  passwordInputRef.current.focus();
                }}
                className="rounded-lg"
              />
            </View>
            <View style={{ marginVertical: 20 }}>
              <TouchableOpacity
                style={[{ height: 44 }]}
                onPress={() => navigation.navigate("EmailSent")}
                className="bg-[#3F7A64] flex-row items-center justify-center rounded-lg">
                <Text style={styles.btntitle}>{i18n.t("submit")}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
      <Text
        className="text-[16px] text-center"
        onPress={() => navigation.goBack()}>
        {i18n.t("back_to")}{" "}
        <Text className="text-[#3F7A64]">{i18n.t("login")}</Text>
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
  input: {
    height: 44,
    borderColor: "#B2B2B2",
    borderWidth: 1,
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

export default ForgotPassword;
