import React, { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import i18n from "../locales/localization";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const Welcome = () => {
  const navigation = useNavigation();

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [date, setDate] = useState("Select a date");

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(moment(new Date(date)).format("MM/DD"));
    hideDatePicker();
  };

  return (
    <View className="bg-[#3F7A64] h-[100vh] py-[32px]">
      <View className="h-[15vh] px-[32px] flex-row items-center">
        <View>
          <Text className="text-white text-[24px] font-bold pb-[8px]">
            {i18n.t("welcome_to_tenure")}
          </Text>
          <Text className="text-white text-[16px] leading-[24px]">
            {i18n.t("welcome_to_tenure_content")}
          </Text>
        </View>
      </View>
      <View className="h-[100%] bg-white px-[32px] rounded-[24px]">
        <Text className="font-bold text-[20px] text-[#010101] py-[24px]">
          {i18n.t("basic_info")}
        </Text>
        <View>
          <Text className="text-[16px] font-medium pb-[8px]">
            {i18n.t("your_name")}
          </Text>
          <TextInput
            label="Name"
            name="name"
            placeholder="Enter your name"
            className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2 mb-[16px]"
          />
        </View>
        <View className="mb-[16px]">
          <Text className="text-[16px] font-medium pb-[8px]">
            {i18n.t("best_represents")}
          </Text>
          <SelectDropdown
            className="border border-3 px-2"
            data={i18n.t("represents")}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            dropdownIconPosition={"right"}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            defaultButtonText={"Select an option"}
          />
        </View>
        <View className="mb-[16px]">
          <Text className="text-[16px] font-medium pb-[8px]">
            {i18n.t("RRSP")}
          </Text>
          <SelectDropdown
            className="border border-3 px-2 mb-[16px]"
            data={i18n.t("rrsp")}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
            dropdownIconPosition={"right"}
            renderDropdownIcon={isOpened => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={"#444"}
                  size={18}
                />
              );
            }}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            defaultButtonText={"Select option"}
          />
        </View>

        <View>
          <Text className="text-[16px] font-medium pb-[8px]">
            {i18n.t("your_birthday")}
          </Text>
          <View>
            <Pressable
              className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2 mb-[16px] flex-row justify-between items-center"
              onPress={showDatePicker}>
              <Text className="text-[#B2B2B2] text-[16px]">{date}</Text>
              <FontAwesome5 name="calendar-day" size={24} color="black" />
            </Pressable>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>

        <View>
          <Text className="text-[16px] font-medium pb-[8px]">
            {i18n.t("you_located")}
          </Text>
          <Text className="text-[12px] leading-[16px] text-[#666666] pb-[8px]">
            {i18n.t("you_located_content")}
          </Text>
          <TextInput
            label="location"
            name="location"
            placeholder="Enter a city (min. 3 characters)"
            className="border border-2 h-[40px] rounded-lg border-[#B2B2B2] px-2 mb-[16px]"
          />
        </View>
        <Pressable
          className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] absolute top-[570] left-[32] rounded-lg"
          onPress={() => {
            navigation.navigate("Payment");
          }}>
          <Text className="text-white text-[16px] font-bold">
            {i18n.t("next")}
          </Text>
          <MaterialCommunityIcons
            name="chevron-right"
            size={30}
            color="white"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown1RowStyle: {
    backgroundColor: "bule",
    borderBottomColor: "transparent",
    paddingHorizontal: 10,
  },
  dropdown1RowTxtStyle: { color: "#010101", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "white" },
  dropdown2BtnStyle: {
    // flex: 1,
    height: 40,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#B2B2B2",
  },
  dropdown2BtnTxtStyle: {
    color: "#B2B2B2",
    // textAlign: "right",
  },
});

export default Welcome;
