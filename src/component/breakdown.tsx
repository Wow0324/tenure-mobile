import React from "react";
import { Text, View, Pressable } from "react-native";
import ProgressCircle from 'react-native-progress/Circle'
import i18n from "../locales/localization";

function BreakdownItem(props) {
  const itemColor = props.type == 'cash' ? "#D4B57C" : "#6FAF91"
  const bgColor = props.isSelected ? itemColor : 'white';
  return (
    <Pressable className="flex-row py-[4px] items-center"
      style={{ backgroundColor: bgColor }}
      onPress={() => {
        if (!props.isSelected) {
          if(props.type == 'cash')
            props.setIsCashSelected(!props.isSelected)
          else
            props.setIsCashSelected(props.isSelected)
        }
      }}
    >
      <ProgressCircle
        progress={props.progress}
        size={40}
        thickness={4}
        unfilledColor={props.type == 'cash' ? "#D4B57C" : "#6FAF91"}
        color="#E5E5E5"
        borderWidth={0}
        bgColor={itemColor}
        showsText={true}
        formatText={() => (
          <View className="flex-col items-center">
            <Text className="text-[#666666] text-[10px]">{props.progress * 100}%</Text>
          </View>
        )}
      />
      <View className="flex-col pl-4">
        <Text className="text-[16px]">{props.type == 'cash' ? i18n.t("cash-back") : i18n.t("round-up")}</Text>
        <Text className="text-[#666666] text-[12px]">$50,000</Text>
      </View>
    </Pressable>
  );
}

export default BreakdownItem;
