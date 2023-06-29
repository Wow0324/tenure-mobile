import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import DealsList from "../../component/dealslist";
import i18n from './../../locales/localization';

const TravelDeals = () => {
  const navigation = useNavigation();
  // const [travelDeals, setTravelDeals] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/travelDeals`)
  //   .then((res) => {
  //     console.log("success")
  //     setTravelDeals(res.data.travelDeals)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <SafeAreaView className="bg-[#3F7A64] min-h-screen">
      <View className="px-[25px] mb-4">
        <View className=" gap-3 mt-4 justify-between items-center flex flex-row">
          <Text className="text-white text-[24px] font-bold pb-[8px]">
            Deals
          </Text>
          <TouchableOpacity onPress={() => { navigation.navigate("Notifications"); }}>
            <Ionicons
              name="ios-notifications-circle-outline"
              size={32}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="h-[90vh]  bg-white px-[20px] rounded-[24px] pt-[24px]">
        <View className="flex flex-row items-center gap-3 pb-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              color="#3F7A64"
              size={20}
              name="arrow-left"
            />
          </TouchableOpacity>
          <Text className="font-semibold text-[17px]">Travel deals</Text>
        </View>
        <DealsList data={i18n.t("travel_deals")} navigation = "TravelDeal" imageType = {0}/>
      </View>
    </SafeAreaView>
  );
};

export default TravelDeals;
