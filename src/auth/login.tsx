import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import Line from "../../assets/svg/Line.svg";
import Logo from "../../assets/svg/tenurefi_icon.svg";
import GoogleIcon from "../../assets/svg/auth/google.svg";
import FacebookIcon from "../../assets/svg/auth/facebook.svg";

const Login = () => {
  const loginUser = () => {
    // axios.post(`${API_BASIC_URL}/emailsent`, data)
    // .then((res) => {
    //   console.log("success")
        // navigation.navigate("HomeScreens")
    // })
    // .catch((error) => {
    //   console.log("error")
    // })
  };
  const passwordInputRef = useRef(null);

  const navigation = useNavigation();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .label("Email")
      .required("Email is required")
      .email("Email is invalid"),
    password: yup.string().label("Password").required("Password is required"),
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity className="flex-row pt-4 items-center" onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#3F7A64" />
        <Text className="text-[#3F7A64] text-[16px] pl-2 font-bold">
          {i18n.t("back")}
        </Text>
      </TouchableOpacity>
      <View>
        <View className="flex-row justify-center">
          <Logo className="mb-[24px]" />
        </View>
        <Text className="text-[30px] font-bold text-center pb-[24px]">
          {i18n.t("welcome_back")}
        </Text>
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={loginUser}>
        {({ isSubmitting, handleSubmit }) => (
          <View>
            <View style={{ marginBottom: 20 }}>
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
              />
            </View>
            <TextInput
              disabled={isSubmitting}
              label="Password"
              name="password"
              password
              placeholder="Enter Password"
              secureTextEntry={true}
              innerRef={passwordInputRef}
              style={styles.input}
              onSubmitEditing={handleSubmit}
            />
            <View>
              <Text
                // style={styles.rightTitle}
                className="text-right text-[14px] font-bold text-[#3F7A64] pt-[8px]"
                onPress={() => navigation.navigate("ForgotPassword")}>
                {i18n.t("forgot_password")}
              </Text>
            </View>
            <View style={{ marginTop: 32 }}>
              <TouchableOpacity
                style={{ height: 44 }}
                className="bg-[#3F7A64] flex-row items-center justify-center rounded-lg"
                onPress={() => navigation.navigate("Payment")}>
                <Text style={styles.btntitle}>{i18n.t("login")}</Text>
              </TouchableOpacity>
            </View>
            
            <View>
              <Text className="text-center pt-[32px] text-[14px]">
                {i18n.t("have_account_yet")}
                <Text
                  onPress={() => navigation.navigate("Signup")}
                  className="text-[#3F7A64] text-[14px] ml-[4px]">
                  {i18n.t("create_account")}
                </Text>
              </Text>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    backgroundColor: "white",
    height: "100%",
    paddingVertical: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 35,
    height: "28%",
  },
  title: {
    fontSize: 32,
    color: "#5A5A5A",
  },
  input: {
    height: 44,
    borderColor: "#B2B2B2",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  list: {
    width: "50%",
  },
  rightTitle: {
    textAlign: "right",
    color: "#5A5A5A",
    paddingTop: 10,
  },
  listItem: {
    fontSize: 14,
    color: "#767676",
  },
  btntitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  btntext: {
    fontSize: 14,
    color: "#3F7A64",
    paddingLeft: 10,
    fontWeight: 700,
  },
  outlineBtn: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    borderColor: "#3F7A64",
  },
  link: {
    color: "#6662F5",
  },
  footer: {
    fontSize: 14,
    color: "#595959",
    paddingTop: 15,
    textAlign: "center",
  },
});

export default Login;
