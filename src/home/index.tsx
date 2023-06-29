import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Dimensions } from "react-native";
import { Entypo, Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import i18n from "../locales/localization";
import AppIntroSlider from "react-native-app-intro-slider";
import ProgressBar from 'react-native-progress/Bar';
import { HomeSliders } from "../const/default";
import ArrowSolid from "../../assets/svg/location-arrow-solid.svg";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import CustomizeModal from "../component/modal";
import { showToast } from "../const/toastr";
import Goal from './../onboarding/goal/index';

const { width } = Dimensions.get('window');
const progressBarWidth = (width - 48) * 0.48 - 24;

export const renderMoney = (amount) => {
  return "$" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
const screenWidth = Dimensions.get("window").width;

const Home = () => {
  const navigation = useNavigation();
  const [showFeatureDeals, setShowFeatureDeals] = useState(true);

  const [isModalVisible, setModalVisible] = useState(false);
  const confirmModal = () => {
    setModalVisible(false);
    showToast("Goal deleted successfully");
  }

  // const [goalsArray, setGoalsArray] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/home`)
  //   .then((res) => {
  //     console.log("success")
  //     setGoalsArray(res.data.data)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const numColumns = 2;
  const columns = [];
  for (let i = 0; i < numColumns; i++) {
    columns.push([]);
  }

  const goalsArray = i18n.t("goals_array");
  goalsArray.forEach((item, index) => {
    columns[index % numColumns].push(item);
  });

  const renderItem = ({ item }) => {
    return (
      <View className="py-[20px]">
        <View className="flex-row justify-center items-center mb-[14px]">
          <item.image />
        </View>
        <Text className="text-[16px] font-bold text-center">{item.title}</Text>
        <View className="flex flex-row items-center justify-center">
          <ArrowSolid />
          <Text className="text-[12px] text-[#666666] text-center ml-1">
            {item.street}
          </Text>
        </View>
        <Text className="text-[16px] font-bold text-center">
          {item.subtitle}
        </Text>
        <Text className="text-[12px] text-[#666666] text-center">
          {item.expireddate}
        </Text>
      </View>
    );
  };

  const renderPrevButton = () => {
    return (
      <View className="flex flex-row items-center justify-start h-full top-[-350%]">
        <FontAwesome name="chevron-left" size={24} color="#333" />
      </View>
    )
  };

  const renderNextButton = () => {
    return (
      <View className="flex-row align-top justify-end top-[-350%]">
        <FontAwesome name="chevron-right" size={24} color="#333" />
      </View>
    )
  };

  return (
    <MenuProvider skipInstanceCheck>
      <View className="bg-[#3F7A64] h-[100vh] py-[32px]">
        <View className="h-[10vh] px-[25px] mt-4 flex-row items-center justify-between">
          <Text className="text-white text-[24px] font-bold pb-[8px]">
            {i18n.t("welcome_jone")}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Notifications")}>
            <Ionicons
              name="ios-notifications-circle-outline"
              size={32}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <View className=" flex-1 bg-white px-[24px] rounded-t-[24px] py-[24px]">
          {goalsArray.length > 0 ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.dropshadow} className="h-[268px] bg-white rounded-xl border-none mb-[16px]">
                <View className="h-[40px] bg-[#3F7A64] rounded-t-lg">
                  <Text className="text-white text-center py-2 text-[16px] leading-[24px]">
                    {i18n.t("featured_deals")}
                  </Text>
                </View>
                {showFeatureDeals ? (
                  <AppIntroSlider
                    renderItem={renderItem}
                    data={HomeSliders}
                    showPrevButton={true}
                    showDoneButton={false}
                    renderNextButton={renderNextButton}
                    renderPrevButton={renderPrevButton}
                    activeDotStyle={{ backgroundColor: "#3F7A64", bottom: 0 }}
                    dotStyle={{ backgroundColor: "#B2B2B2", bottom: 0 }}
                  />
                ) : null}
              </View>
              <View
                style={[styles.dropshadow, {
                  flexDirection: "column",
                  justifyContent: "space-between",
                }]}
                className="h-[150px] bg-white rounded-xl border-none py-[20px] my-[20px]"
              >
                <Text className="text-center text-[16px] text-[#666666]">
                  {i18n.t("total_savings")}
                </Text>
                <Text className="text-center text-[32px]">$100,000.00</Text>
                <TouchableOpacity className="flex-row items-center justify-center" onPress={() => navigation.navigate("Savings")}>
                  <Text className="text-center text-[#3F7A64] text-[16px] font-bold mr-1">
                    {i18n.t("savings_info")}
                  </Text>
                  <View className="p-1" >
                    <MaterialIcons name="arrow-forward" size={24} color="#3F7A64" />
                  </View>
                </TouchableOpacity>
              </View>
              <View className="flex-row justify-between mb-1">
                <Text className="text-[24px]">{i18n.t("saving_goals")}</Text>
                <TouchableOpacity className="p-1" onPress={() => navigation.navigate("Goal")}>
                  <Entypo name="circle-with-plus" size={24} color="#3F7A64" />
                </TouchableOpacity>
              </View>
              <View className="flex flex-row">
                <View className="flex w-[50%]">
                  {columns[0].map((item, index) => (
                    <View key={`column0-${index}`} className="flex-row justify-between">
                      <View className={index % 2 == 0 ? "h-[184px] w-[96%] m-1 justify-between p-[12px] bg-[#FCF8E7] rounded-xl" : "h-[184px] w-[96%] m-1 justify-between p-[12px] bg-[#E0F8E5] rounded-xl"}>
                        <View className="flex-row justify-between items-center">
                          <Text className="text-[16px] font-bold">{item.title}</Text>
                          <Menu>
                            <MenuTrigger>
                              <Entypo
                                name="dots-three-vertical"
                                size={20}
                                color="black"
                              />
                            </MenuTrigger>
                            <MenuOptions
                              optionsContainerStyle={{
                                borderBottomEndRadius: 10,
                                borderBottomStartRadius: 10,
                                width: 150,
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: 30
                              }}

                            >
                              <MenuOption
                                style={{ width: 150, alignItems: "center" }}
                                onSelect={() => navigation.navigate("Goal", { item: item })}>
                                <View className="flex-row items-center">
                                  <MaterialIcons
                                    name="edit"
                                    size={24}
                                    color="black"
                                  />
                                  <Text style={{ width: 100 }} className="pl-2">{i18n.t("edit_goal")}</Text>
                                </View>
                              </MenuOption>
                              <MenuOption
                                style={{ width: 150, alignItems: "center", borderBottomEndRadius: 10, borderStartEndRadius: 10 }}
                                onSelect={() => setModalVisible(!isModalVisible)}>
                                <View className="flex-row items-center">
                                  <MaterialIcons
                                    name="delete"
                                    size={24}
                                    color="black"
                                  />
                                  <Text style={{ width: 100 }} className="pl-2">{i18n.t("delete_goal")}</Text>
                                </View>
                              </MenuOption>
                            </MenuOptions>
                          </Menu>
                          <CustomizeModal
                            type="goal"
                            isModalVisible={isModalVisible}
                            setModalVisible={setModalVisible}
                            confirmModal={confirmModal}
                          />
                        </View>
                        <Text className="text-[12px]">Goal</Text>
                        <Text className="text-[16px] font-bold">{renderMoney(item.goal)}</Text>
                        <Text className="text-[12px]">Progress</Text>
                        <Text className="text-[16px] font-bold">{renderMoney(item.goal * item.percentage / 100)}</Text>

                        <ProgressBar
                          progress={item.percentage / 100}
                          width={progressBarWidth}
                          height={15}
                          color="#3F7A64"
                          unfilledColor="#E5E5E5"
                          borderRadius={10} />
                      </View>
                    </View>
                  ))}
                </View>
                <View className="flex w-[50%]">
                  {columns[1].map((item, index) => (
                    <View key={`column1-${index}`} className="flex-row justify-between">
                      <View className={index % 2 == 0 ? "h-[184px] w-[96%] m-1 justify-between p-[12px] bg-[#E0F8E5] rounded-xl" : "h-[184px] w-[96%] m-1 justify-between p-[12px] bg-[#FCF8E7] rounded-xl"}>
                        <View className="flex-row justify-between items-center">
                          <Text className="text-[16px] font-bold">{item.title}</Text>
                          <Menu>
                            <MenuTrigger>
                              <Entypo
                                name="dots-three-vertical"
                                size={20}
                                color="black"
                              />
                            </MenuTrigger>
                            <MenuOptions
                              optionsContainerStyle={{
                                borderBottomEndRadius: 10,
                                borderBottomStartRadius: 10,
                                width: 150,
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: 30
                              }}

                            >
                              <MenuOption
                                style={{ width: 150, alignItems: "center" }}
                                onSelect={() => navigation.navigate("Goal", { item: item })}>
                                <View className="flex-row items-center">
                                  <MaterialIcons
                                    name="edit"
                                    size={24}
                                    color="black"
                                  />
                                  <Text style={{ width: 100 }} className="pl-2">{i18n.t("edit_goal")}</Text>
                                </View>
                              </MenuOption>
                              <MenuOption
                                style={{ width: 150, alignItems: "center", borderBottomEndRadius: 10, borderStartEndRadius: 10 }}
                                onSelect={() => setModalVisible(!isModalVisible)}>
                                <View className="flex-row items-center">
                                  <MaterialIcons
                                    name="delete"
                                    size={24}
                                    color="black"
                                  />
                                  <Text style={{ width: 100 }} className="pl-2">{i18n.t("delete_goal")}</Text>
                                </View>
                              </MenuOption>
                            </MenuOptions>
                          </Menu>
                          <CustomizeModal
                            type="goal"
                            isModalVisible={isModalVisible}
                            setModalVisible={setModalVisible}
                            confirmModal={confirmModal}
                          />
                        </View>
                        <Text className="text-[12px]">Goal</Text>
                        <Text className="text-[16px] font-bold">{renderMoney(item.goal)}</Text>
                        <Text className="text-[12px]">Progress</Text>
                        <Text className="text-[16px] font-bold">{renderMoney(item.goal * item.percentage / 100)}</Text>

                        <ProgressBar
                          progress={item.percentage / 100}
                          width={progressBarWidth}
                          height={15}
                          color="#3F7A64"
                          unfilledColor="#E5E5E5"
                          borderRadius={10} />
                      </View>
                    </View>
                  ))}
                </View>

              </View>
            </ScrollView>

          ) : (
            <View className="h-[100%]">
              <View
                style={[styles.dropshadow, {
                  flexDirection: "column",
                  justifyContent: "space-between",
                }]}
                className="h-[150px] bg-white rounded-xl border-none py-[20px] mb-[32px]"
              >
                <Text className="text-center text-[16px] text-[#666666]">
                  {i18n.t("total_savings")}
                </Text>
                <Text className="text-center text-[32px]">$100,000.00</Text>
                <View className="flex-row items-center justify-center">
                  <Text className="text-center text-[#3F7A64] text-[16px] font-bold mr-1">
                    {i18n.t("savings_info")}
                  </Text>
                  <TouchableOpacity className="p-1">
                    <MaterialIcons name="arrow-forward" size={24} color="#3F7A64" />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="flex-row justify-between mb-[15px]">
                <Text className="text-[20px] font-bold">{i18n.t("saving_goals")}</Text>
              </View>
              <Text className="text-center text-[15px] text-[#666666]">
                {i18n.t("savings_goal_empty_content")}
              </Text>

              <TouchableOpacity
                className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[20px] mt-4"
                onPress={() => navigation.navigate("Goal")}>
                <Entypo name="circle-with-plus" size={24} color="#FFF" />
                <Text className="text-white text-[16px] font-bold pl-1">
                  {i18n.t("create_saving_goal")}
                </Text>
              </TouchableOpacity>

              <View className="flex-row justify-between mb-[15px]">
                <Text className="text-[20px] font-bold">{i18n.t("featured_deals")}</Text>
              </View>
              <Text className="text-center text-[15px] text-[#666666]">
                {i18n.t("featured_goal_empty_content")}
              </Text>
            </View>
          )}
        </View>
      </View>
    </MenuProvider>
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

export default Home;
