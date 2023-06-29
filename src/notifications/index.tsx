import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import i18n from "../locales/localization";

const Notifications = () => {
  const navigation = useNavigation();
 
  // const [notifications, setNotifications] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/notifications`)
  //   .then((res) => {
  //     console.log("success")
  //     setNotifications(res.data.notifications)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <SafeAreaView className="bg-[#3F7A64] h-[100vh]">
      <View className="px-[25px] mb-5">
        <View className=" gap-3 mt-6 items-center flex flex-row">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              color="white"
              size={20}
              name="arrow-left"
            />
          </TouchableOpacity>
          <Text className="text-white font-bold text-[24px] ">{i18n.t("notification")}</Text>
        </View>
      </View>
      <View className="h-[90vh]  bg-white px-[25px] rounded-[24px] pt-[20px]">
        {i18n.t("notifications").length > 0 ? (
          <View className="mb-20">
            <FlatList
              data={i18n.t("notifications")}
              showsVerticalScrollIndicator={false}
              keyExtractor={item => item.date}
              renderItem={({ item: notification }) => (
                <View className={"mb-4"}>
                  <Text className="font-bold text-lg">{notification.date}</Text>
                  <FlatList
                    className={`mt-3 ${notification.date === "Today" ? "bg-[#D4B57C]" : ""} rounded-md`}
                    data={notification.notifies}
                    renderItem={({ item: notify }) => (
                      <View className="border-b pt-3 rounded pl-4  pb-2 border-[#B2B2B2]">
                        <Text className="font-bold text-[16px]">
                          {notify.title}
                        </Text>
                        <Text className="mt-1 text-[12px]">{notify.description}</Text>
                      </View>
                    )}
                  />
                </View>
              )}
            />
          </View>
        ) : (
          <View className="flex items-center h-[69vh] justify-center flex-col">
            <Text className="text-[#666666] text-[15px]">
              {i18n.t("notification_empty")}
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
