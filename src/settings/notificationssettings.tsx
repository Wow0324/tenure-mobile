import { View, Text, ScrollView, Switch, Pressable } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import i18n from "../locales/localization";
import { TouchableOpacity } from "react-native-gesture-handler";
import { showToast } from "../const/toastr";

const NotificationsSettings = () => {
  const navigation = useNavigation();
  const [isPushEnabled, setPushEnabled] = useState(false);
  const [isPolicyEnabled, setPolicyEnabled] = useState(false);
  const [isMarketingEnabled, setMarketingEnabled] = useState(false);

  const toggleSwitchPush = () => {
    setPushEnabled(previousState => !previousState);
  };

  const toggleSwitchPolicy = () => {
    setPolicyEnabled(previousState => !previousState);
  };

  const toggleSwitchMarketing = () => {
    setMarketingEnabled(previousState => !previousState);
  };

  // const handleChange = () => {
  //   axios.post(`${API_BASIC_URL}/settings/notification`, {isPushNotification, isPolicy, isMarketing})
  //   .then((res) => {
  //     console.log("success")
  //      setPushEnabled(res.data.isPushEnabled)
  //      setPolicyEnabled(res.data.isPolicyEnabled)
  //      setMarketingEnabled(res.data.isMarketingEnabled)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }
  
  return (
    <SafeAreaView className="bg-[#3F7A64] min-h-screen">
      <View className="px-[25px] mb-5">
        <View className="  mt-6 ">
          <Text className="text-white font-bold text-[24px] ">{i18n.t("settings")}</Text>
        </View>
      </View>
      <View className="h-[90vh] bg-white px-[25px] rounded-[24px] py-[24px]">
        <View className="flex flex-row items-center gap-3">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              color="#3F7A64"
              size={20}
              name="arrow-left"
            />
          </TouchableOpacity>
          <Text className="font-semibold text-[17px]">
            {i18n.t("notifications_settings")}
          </Text>
        </View>
        <View className="mt-5 h-[500px] mb-24">
          <View className="flex mb-3 flex-col gap-1">
            <Text className="text-[#666666] text-sm font-medium">
              {i18n.t("deals_near_me")}
            </Text>
            <View className="flex flex-row justify-between">
              <Text className="text-base font-[450]">{i18n.t("push_notifications")}</Text>
              <View
                style={{
                  borderRadius: 20,
                  width: 52,
                  height: 27,
                  backgroundColor: isPushEnabled ? "#3F7A64" : "gray",
                  padding: 5,
                  justifyContent: "center",
                }}>
                <Switch
                  className={isPushEnabled ? "-mr-1" : "-mr-[1.5px]"}
                  trackColor={{ false: "transparent", true: "transparent" }}
                  thumbColor="#fff"
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchPush}
                  value={isPushEnabled}
                />
              </View>
            </View>
          </View>
          <View className="flex mb-3 flex-col gap-1">
            <Text className="text-[#666666] text-sm">
              {i18n.t("policy_term_update")}
            </Text>
            <View className="flex flex-row justify-between">
              <Text className="text-base font-[450]">
                {i18n.t("email_default")}
              </Text>
              <View
                style={{
                  borderRadius: 20,
                  width: 52,
                  height: 27,
                  backgroundColor: isPolicyEnabled ? "#3F7A64" : "gray",
                  padding: 5,
                  justifyContent: "center",
                }}>
                <Switch
                  className={isPolicyEnabled ? "-mr-1" : "-mr-[1.5px]"}
                  trackColor={{ false: "transparent", true: "transparent" }}
                  thumbColor="#fff"
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchPolicy}
                  value={isPolicyEnabled}
                />
              </View>
            </View>
          </View>
          <View className="flex mb-3 flex-col gap-1">
            <Text className="text-[#666666] text-sm">
              {i18n.t("marketing_promotions")}
            </Text>
            <View className="flex flex-row justify-between">
              <Text className="text-base font-[450]">{i18n.t("email")}</Text>
              <View
                style={{
                  borderRadius: 20,
                  width: 52,
                  height: 27,
                  backgroundColor: isMarketingEnabled ? "#3F7A64" : "gray",
                  padding: 5,
                  justifyContent: "center",
                }}>
                <Switch
                  className={isMarketingEnabled ? "-mr-1" : "-mr-[1.5px]"}
                  trackColor={{ false: "transparent", true: "transparent" }}
                  thumbColor="#fff"
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitchMarketing}
                  value={isMarketingEnabled}
                />
              </View>
            </View>
          </View>
          <View className="flex mb-3 flex-col gap-2">
            <Text className="text-[#666666] text-sm">
              {i18n.t("privacy_policy")}
            </Text>
            <Text className="leading-5 text-sm">
              {i18n.t("notification_policy")}
            </Text>
          </View>
          <Pressable
            android_ripple={{ color: '#5F9A94' }}
            className="bg-[#3F7A64] rounded py-2 mt-2"
            onPress={() => {
              showToast("Notification settings saved successfully.");
              navigation.goBack()
            }}>
            <Text className="text-white font-semibold text-base text-center">{i18n.t("save_changes")}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotificationsSettings;
