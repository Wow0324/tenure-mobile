import React from "react";
import DealsDetail from "../../component/dealsdetail";
import { Image } from "react-native";
import i18n from "../../locales/localization";

const RetailDeal = ({route}) => {
  const {location} = route.params;

  return (
    <DealsDetail data={i18n.t("retail_deal")} subTitle = {"Back To Retail deals"} requireMap={true} location={location} imageType = {1}/>
  );
};

export default RetailDeal;
