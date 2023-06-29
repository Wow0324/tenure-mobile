import React from "react";
import DealsDetail from "../../component/dealsdetail";
import { Image
 } from "react-native";
import i18n from "../../locales/localization";
const TravelDeal = ({route}) => {
  
  const {location} = route.params;
  return (
    <DealsDetail data={i18n.t("travel_deal")} subTitle={"Back To Travel deals"} 
                  isTravelDeals={true} location = {location} imageType = {0}/>
  );
};

export default TravelDeal;
