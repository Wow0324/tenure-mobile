import React from "react";
import { useNavigation } from "@react-navigation/native";
import DealsDetail from "../../component/dealsdetail";
import { Image } from "react-native";
import i18n from "../../locales/localization";

const FoodDeal = ({route}) => {
  const {location} = route.params;
 
  return (
    <DealsDetail data={i18n.t("food_deal")} subTitle={"Back To Food deals"} requireMap={true} location={location} imageType = {3}/>
  );
};

export default FoodDeal;
