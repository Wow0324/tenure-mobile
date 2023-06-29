import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import i18n from "../locales/localization";
import { Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { renderMoney } from "../home";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import { useNavigation } from "@react-navigation/native";
import { LineChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get("window").width;

const History = () => {

  // const [data, setData] = useState();

  // const fetchData = () => {
  //   axios.post(`${API_BASIC_URL}/data`, email)
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
  
  const chartConfig = {
    backgroundColor: "#FFFFFF",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#FFFFFF",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `#E5E5E5`,
    labelColor: (opacity = 1) => `#000`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    decimalPlaces: '0',
    useShadowColorFromDataset: false, // optional
    propsForHorizontalLabels: {
      fontSize: 11 // Set the font size for the x-axis label text
    },
    propsForVerticalLabels: {
      fontSize: 10 // Set the font size for the x-axis label text
    },
    propsForBackgroundLines: {
      strokeDasharray: '', // solid line
      strokeWidth: 1, // width of the horizontal grid lines
      stroke: '#e8e8e8' // color of the horizontal grid lines
    }
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        data: [3200, 400, 700, 1000, 2000, 2500, 3000, 3500, 4500, 5000, 5500, 5500],
        color: (opacity = 1) => `#3F7A64`, // optional
        strokeWidth: 2 // optional
      }
    ]
  };

  const flatListRef = React.useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation()
  return (
    <SafeAreaView className="bg-[#3F7A64] h-[100vh] py-[32px]">
      <View className="h-[10vh] px-[25px] mt-4 justify-between items-center flex-row">
        <Text className="text-white text-[24px] font-bold pb-[8px]">
          {i18n.t("your_history")}
        </Text>
        <Ionicons
          onPress={() => {
            navigation.navigate("Notifications");
          }}
          name="ios-notifications-circle-outline"
          size={32}
          color="white"
        />
      </View>
      <View className="h-[90vh] bg-white px-[24px] rounded-t-[24px] py-[24px]">
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex justify-center flex-row items-start gap-3">
            <View>
              <Text
                onPress={() => {
                  flatListRef.current.goToFirstIndex();
                  setCurrentIndex(0);
                }}
                className={`font-semibold text-[15px] ${currentIndex !== 0
                  ? "text-[#B2B2B2]"
                  : "text-[#3F7A64]  outline-slate-900"
                  }`}>
                Cash-back
              </Text>
              {currentIndex === 0 && (
                <View className="border-t-2 border-[#3F7A64] mt-[5px]"></View>
              )}
            </View>
            <View>
              <Text
                onPress={() => {
                  setCurrentIndex(1);
                  flatListRef.current.goToLastIndex();
                }}
                className={`font-semibold text-[15px] ${currentIndex !== 1
                  ? "text-[#B2B2B2]"
                  : "text-[#3F7A64] outline-1 outline-dashed outline-offset-1 outline-slate-900"
                  }`}>
                Round-ups
              </Text>
              {currentIndex === 1 && (
                <View className="border-t-2 border-[#3F7A64] mt-[5px]"></View>
              )}
            </View>
          </View>
          <SwiperFlatList
            style={{ width: screenWidth }}
            autoplay={false}
            autoplayLoop={false}
            scrollEnabled={true}
            ref={flatListRef}
            onChangeIndex={({ index }) => setCurrentIndex(index)}
            showPagination={false}>
            <View style={{ width: screenWidth, paddingTop: 20, paddingLeft: 1 }}>
              <View
                style={[styles.dropshadow, {
                  height: 300,
                  width: screenWidth - 50,
                  paddingTop: 10,
                  flexDirection: "row",
                }]}>

                <LineChart
                  data={data}
                  width={screenWidth - 60}
                  height={300}
                  chartConfig={chartConfig}
                  withVerticalLines={false}
                  withDots={false}
                  propsForVerticalLabels={{ fontSize: 12, position: 'right' }}
                  fromZero={true}
                  yAxisLabel="$"
                  segments={11}
                />
              </View>
              <View style={{ width: screenWidth - 70 }} className="mt-6">
                <Text className="font-semibold text-[18px]">
                  Cash-back breakdown
                </Text>
                <FlatList
                  className="mt-3 ml-4"
                  data={i18n.t("cashBacks")}
                  renderItem={({ item }) => (
                    <View className="flex border-b border-[#B2B2B2] pb-2 flex-row mb-3 items-center justify-between">
                      <View className="flex flex-col">
                        <Text className="font-semibold text-[16px]">
                          {item.name}
                        </Text>
                        <Text className="text-[12px] text-[#666666]">
                          Cash-back: &#40;{item.visits} of 3 visits&#41;
                        </Text>
                      </View>
                      <Text className="font-semibold">
                        {renderMoney(item.amount) + ".00"}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
            <View style={{ width: screenWidth, paddingTop: 20, paddingLeft: 1 }}>
              <View
                style={[styles.dropshadow, {
                  height: 300,
                  width: screenWidth - 50,
                  paddingTop: 10,
                  flexDirection: "row",
                }]}>

                <LineChart
                  data={data}
                  width={screenWidth - 60}
                  height={300}
                  chartConfig={chartConfig}
                  withVerticalLines={false}
                  withDots={false}
                  propsForVerticalLabels={{ fontSize: 12, position: 'right' }}
                  fromZero={true}
                  yAxisLabel="$"
                  segments={11}
                />
              </View>
              <View className="mt-6" style={{ width: screenWidth - 70 }}>
                <Text className="font-semibold text-[18px]">
                  Round-ups breakdown
                </Text>
                <FlatList
                  className="mt-3 ml-4"
                  data={i18n.t("roundUps")}
                  renderItem={({ item }) => (
                    <View className="flex border-b border-[#B2B2B2] pb-2 flex-row mb-3 items-center justify-between">
                      <View className="flex flex-col">
                        <Text className="font-semibold text-[16px]">
                          {item.name}
                        </Text>
                        <Text className="text-[12px] text-[#666666]">
                          Cash-back: &#40;{item.visits} of 3 visits&#41;
                        </Text>
                      </View>
                      <Text className="font-semibold">
                        {renderMoney(item.amount) + ".00"}
                      </Text>
                    </View>
                  )}
                />
              </View>
            </View>
          </SwiperFlatList>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 200,
    marginHorizontal: 100,
  },
  child: { width: screenWidth, justifyContent: "center" },
  dropshadow: {
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

export default History;
