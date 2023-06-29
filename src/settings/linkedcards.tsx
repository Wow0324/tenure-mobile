import { View, Text, StyleSheet, Pressable, FlatList } from "react-native";
import React, { useState } from "react";
import {
  Entypo,
  FontAwesome5,
  MaterialIcons
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import CustomizeModal from "../component/modal";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import { TouchableOpacity } from "react-native-gesture-handler";
import i18n from "../locales/localization";
import { cards } from "../const/default";
import { showToast } from "../const/toastr";

const LinkedCards = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const confirmModal = () => {
    setModalVisible(false);
    showToast("Card deleted successfully");
  }

  // const [card, setCards] = useState();

  // const fetchData = () => {
  //   axios.get(`${API_BASIC_URL}/cards`)
  //   .then((res) => {
  //     console.log("success")
  // setCards(res.data.cards)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useFocusEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <MenuProvider skipInstanceCheck>
      <SafeAreaView className="bg-[#3F7A64] min-h-screen">
        <View className="px-[25px] mb-5">
          <View className="  mt-7 ">
            <Text className="text-white font-bold text-[24px] ">{i18n.t("settings")}</Text>
          </View>
        </View>

        <View className="h-[90vh]  bg-white px-[25px] rounded-[24px] py-[24px]">
          <View className="flex flex-row items-center gap-3">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5
                color="#3F7A64"
                size={20}
                name="arrow-left"
              />
            </TouchableOpacity>
            <Text className="font-semibold text-[17px]">{i18n.t("linked_cards")}</Text>
          </View>
          <View className="flex my-3 flex-row justify-end">
            <Pressable
              android_ripple={{ color: '#5F9A94' }}
              onPress={() => navigation.navigate("SettingsCardLink")}
              className="items-center bg-[#3F7A64] rounded-md py-[9px] px-2  flex-row ">
              <Entypo size={20} color={"white"} name="circle-with-plus" />
              <Text className="text-white font-bold ml-2">
                {i18n.t("link_another_cards")}
              </Text>
            </Pressable>
          </View>
          {cards.length > 0 ? (
            <FlatList
              data={cards}
              renderItem={({ item: { Icon, expiry, number, name, postalCode, cvv } }) => (
                <View style={styles.dropshadow} className="flex p-4 flex-row items-center rounded-lg my-2 justify-between">
                  <View className="flex flex-row items-center gap-2">
                    <Icon />
                    <View className="flex flex-col gap-1">
                      <Text className="font-semibold">{number}</Text>
                      <Text className="text-[#B2B2B2] text-[12px]">{expiry}</Text>
                    </View>
                  </View>
                  <View>
                    <Menu>
                      <MenuTrigger>
                        <Entypo
                          name="dots-three-vertical"
                          size={18}
                          color="black"
                        />
                      </MenuTrigger>
                      <MenuOptions
                        customStyles={{
                          optionsContainer: {
                            borderBottomEndRadius: 10,
                            borderBottomStartRadius: 10,
                            width: 150,
                            flexDirection: "row",
                            justifyContent: "center",
                            marginTop: 30,
                          },
                        }}>
                        <MenuOption style={{ width: 150, alignItems: "center" }}
                        onSelect={() => navigation.navigate("EditLinkedCard", {card : {"name" : name, "postalCode" : postalCode, "cvv" : cvv, "number" : number, "expiry" : expiry}})}>
                          <View className="flex-row items-center pl-2">
                            <MaterialIcons
                              name="edit"
                              size={24}
                              color="black"
                            />
                            <Text className="pl-3 w-[80%]">Edit card</Text>
                          </View>
                        </MenuOption>
                        <MenuOption
                          style={{ width: 150, alignItems: "center" }}
                          onSelect={() => setModalVisible(!isModalVisible)}>
                          <View className="flex-row items-center pl-2">
                            <MaterialIcons
                              name="delete"
                              size={24}
                              color="black"
                            />
                            <Text className="pl-3 w-[80%]">Delete card</Text>
                          </View>
                        </MenuOption>
                      </MenuOptions>
                    </Menu>
                    <CustomizeModal
                      type="card"
                      isModalVisible={isModalVisible}
                      setModalVisible={setModalVisible}
                      confirmModal={confirmModal}
                    />
                  </View>
                </View>
              )}
            />
          ) : (
            <View className="flex items-center h-[60vh] flex-col gap-2 justify-center">
              <Text className="text-[#666666] text-[15px]">
                {i18n.t("link_card_empty")}
              </Text>
              <Pressable
                android_ripple={{ color: '#5F9A94' }}
                onPress={() => navigation.navigate("SettingsCardLink")}
                className="rounded-md bg-[#3F7A64] w-[98%] py-2">
                <Text className="text-center font-semibold  text-white">
                  {i18n.t("link_card")}
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </SafeAreaView>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  dropshadow: {
    marginHorizontal: 4,
    backgroundColor: '#fff',
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

export default LinkedCards;
