import { View, Text, ScrollView, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native";
import i18n from "../locales/localization";
import { showToast } from "../const/toastr";
const ChangePassword = () => {
  const navigation = useNavigation();
  const [showOldPassowrd, setShowOldpassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReneteredNewPassword, setShowReenteredNewPassword] = useState(false);

  // const handleRoundedUp = () => {
  //   axios.post(`${API_BASIC_URL}/payment`, {showOldPassowrd, showNewPassword, showReneteredNewPassword})
  //   .then((res) => {
  //     console.log("success")
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }
  return (
    <SafeAreaView className="bg-[#3F7A64] min-h-screen">
      <View className="px-[25px] mb-5">
        <View className="  mt-7 ">
          <Text className="text-white font-bold text-[24px] ">Settings</Text>
        </View>
      </View>
      <View>
        <ScrollView className="h-[90vh]  bg-white px-[25px] rounded-[24px] py-[24px]">
          <View className="flex flex-row items-center gap-3">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5
                color="#3F7A64"
                size={20}
                name="arrow-left"
              />
            </TouchableOpacity>
            <Text className="font-semibold text-[17px]">{i18n.t("change_password")}</Text>
          </View>
          <View className="relative">
            <TextInput
              className="border p-2 mt-5 border-[#B2B2B2] rounded-xl"
              placeholder="Enter old password"
              secureTextEntry={!showOldPassowrd}
            />
            <Pressable
              onPress={() => {
                setShowOldpassword(current => !current);
              }}
              className="absolute right-[10px] top-1/2">
              {showOldPassowrd ? (
                <Ionicons name="eye" size={22} />
              ) : (
                <Ionicons name={"eye-off"} size={22} />
              )}
            </Pressable>
          </View>
          <View className="relative">
            <TextInput
              className="border p-2 mt-5 border-[#B2B2B2] rounded-xl"
              placeholder="Enter new password"
              secureTextEntry={!showNewPassword}

            />
            <Pressable
              onPress={() => {
                setShowNewPassword(current => !current);
              }}
              className="absolute right-[10px] top-1/2">
              {showNewPassword ? (
                <Ionicons name="eye" size={22} />
              ) : (
                <Ionicons name={"eye-off"} size={22} />
              )}
            </Pressable>
          </View>
          <View className="relative">
            <TextInput
              className="border p-2 mt-5 border-[#B2B2B2] rounded-xl"
              placeholder="Re-enter new password"
              secureTextEntry={!showReneteredNewPassword}
            />
            <Pressable
              onPress={() => {
                setShowReenteredNewPassword(current => !current);
              }}
              className="absolute right-[10px] top-1/2">
              {showReneteredNewPassword ? (
                <Ionicons name="eye" size={22} />
              ) : (
                <Ionicons name={"eye-off"} size={22} />
              )}
            </Pressable>
          </View>
          <Pressable
            android_ripple={{ color: '#5F9A94' }}
            onPress={() => {
              showToast("Password changed successfully.");
              navigation.goBack()
            }
            }
            className="bg-[#3F7A64] mt-5 rounded py-2">
            <Text className="text-white text-center font-semibold">
              {i18n.t("change_password")}
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;
