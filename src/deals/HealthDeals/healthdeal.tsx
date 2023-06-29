import React from "react";
import DealsDetail from "../../component/dealsdetail";
import { Image } from "react-native";
import i18n from "../../locales/localization";

const HealthDeal = ({route}) => {
  const {location} = route.params;

  return (
    <DealsDetail data = {i18n.t("health_deal")} subTitle={"Back To Health deals"} requireMap={true} location={location} imageType={2}/>
  );
};

export default HealthDeal;
