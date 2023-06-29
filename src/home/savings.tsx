import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import ProgressCircle from 'react-native-progress/Circle'
import BreakdownItem from "../component/breakdown"

const Savings = () => {
  const navigation = useNavigation();
  const [showEmptyState, setShowEmptyState] = useState(false);
  const [isCashSelected, setIsCashSelected] = useState(true);

  // const [data, setData] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/data`)
  //   .then((res) => {
  //     console.log("success")
  //     setData(res.data.data)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <View className="bg-[#3F7A64] h-[100vh] pt-[32px]">
      <View className="h-[10vh] px-[24px] mt-4 flex-row justify-between items-center">
        <View className="flex-row">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={28}
              color="white"
            />
          </TouchableOpacity>
          <Text className="text-white text-[24px] font-bold pl-[4px]">
            {i18n.t("your_savings")}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
          <Ionicons
            name="ios-notifications-circle-outline"
            size={28}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View className="h-[90vh] bg-white px-[24px] rounded-t-[24px] py-[24px]">
        <View
          style={[styles.dropshadow, {
            flexDirection: "column",
            justifyContent: "space-between",
          }]}
          className=" bg-white rounded-xl border-none items-center py-[20px] mb-[10px]"
        >
          {showEmptyState ? (
            <ProgressCircle
              progress={0}
              size={160}
              thickness={9}
              unfilledColor="#E5E5E5"
              borderWidth={0}
              bgColor="#fff"
              showsText={true}
              formatText={() => (
                <View className="flex-col items-center">
                  <Text className="text-[#666666] text-[12px]">Total Savings</Text>
                  <Text className="font-bold text-[16px]">$0.00</Text>
                </View>
              )}
            />
          ) : (
            <ProgressCircle
              progress={0.45}
              size={160}
              thickness={9}
              color="#D4B57C"
              unfilledColor="#6FAF91"
              borderWidth={0}
              bgColor="#fff"
              showsText={true}
              formatText={() => (
                <View className="flex-col items-center">
                  <Text className="text-[#666666] text-[11px]">Total Savings</Text>
                  <Text className="font-bold text-[16px]">$100,000.00</Text>
                </View>
              )}
            />
          )}

          {showEmptyState ? (
            null
          ) : (
            <TouchableOpacity
              className="flex-row w-[50%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[10px] mt-4"
              onPress={() => navigation.navigate("TransferSavings")}>
              <Text className="text-white text-[14px] font-bold pl-1">
                {i18n.t("transfer_savings")}
              </Text>
            </TouchableOpacity>
          )}

        </View>

        {showEmptyState ? (
          <View className="mt-5">
            <Text className="text-center text-[15px] text-[#666666]">
              {i18n.t("savings_info_empty_content")}
            </Text>

            <TouchableOpacity
              className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[20px] mt-4">
              <Text className="text-white text-[16px] font-bold pl-1">
                {i18n.t("link_card")}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="flex-col mt-1">
            <Text className="text-[18px] pb-[5px]">{i18n.t("savings_breakdown")}</Text>
            <View className="flex-col">
              <BreakdownItem progress={0.5} type={'cash'} isSelected={isCashSelected} setIsCashSelected={setIsCashSelected} />
              <BreakdownItem progress={0.5} type={'round'} isSelected={!isCashSelected} setIsCashSelected={setIsCashSelected} />
            </View>
          </View>
        )
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 200,
    marginHorizontal: 100,
  },
  dropshadow: {
    marginHorizontal: 4,
    backgroundColor: '#fff',

    // add shadows for Android
    // No options forshadow offset, shadow opacity like iOS
    elevation: 5,

    // shadow color
    shadowColor: 'black',
    shadowRadius: 8,
    // work for iOS only
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
});

export default Savings;
