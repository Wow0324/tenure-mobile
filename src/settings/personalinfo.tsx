import { View, Text, ScrollView } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import i18n from "../locales/localization";
import { TouchableOpacity } from "react-native-gesture-handler";

const PersonalInfo = () => {
  const navigation = useNavigation();
  const user = {
    fullname: "John Doe",
    email: "jondoe@gmail.com",
    birthday: "06/11",
    location: "Brampton, ON",
  };

  // const [user, setUser] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/user`)
  //   .then((res) => {
  //     console.log("success")
  // setUser(res.data.user)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useFocusEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <SafeAreaView className="bg-[#3F7A64] min-h-screen">
      <View className="px-[25px] mb-5">
        <View className="  mt-7 ">
          <Text className="text-white font-bold text-[24px]">{i18n.t("settings")}</Text>
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
            <Text className="font-semibold text-[17px]">{i18n.t("personal_info")}</Text>
          </View>

          <View className="mt-7">
            <Text className="font-semibold text-[15px]">{i18n.t("personal_detail")}</Text>
            <View className="mt-5 h-[500px]">
              <View className="flex mb-4 flex-col gap-3">
                <Text className="text-[#666666] text-sm">
                {i18n.t("full_name")}
                </Text>
                <Text className="text-base">{user.fullname}</Text>
              </View>
              <View className="flex mb-4 flex-col gap-3">
                <Text className="text-[#666666] text-sm">
                {i18n.t("email")}
                </Text>
                <Text className="text-base">{user.email}</Text>
              </View>
              <View className="flex  mb-4 flex-col gap-3">
                <Text className="text-[#666666] text-sm">
                {i18n.t("location")}
                </Text>
                <Text className="text-base">{user.location}</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default PersonalInfo;
