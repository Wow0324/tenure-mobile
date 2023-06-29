import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import i18n from "../locales/localization";
import Results from "../component/results";
import Transfer from "../component/transfer";
import PinCode from "../component/pincode";

const TransferSavings = () => {
  const navigation = useNavigation();
  //state values
  const [transferValid, setTransferValid] = useState(false);
  const [pinValid, setPinValid] = useState(false);
  
  const setDone = () => {
    // axios.post(`${API_BASIC_URL}/transfer_savings`, data)
    // .then((res) => {
    //   console.log("success")
    // })
    // .catch((error) => {
    //   console.log("error")
    // })
    navigation.goBack();
  }
  const setRetry = () => {
    setTransferValid(false)
    setPinValid(false)
  }

  useFocusEffect(
    React.useCallback(() => {
      setPinValid(false);
      setTransferValid(false);
    }, [])
  );

  return (
    <View className="bg-[#3F7A64] h-[100vh] pt-[32px]">
      <View className="h-[10vh] px-[24px] mt-4 flex-row justify-between items-center">
        <View className = "flex-row">
          <TouchableOpacity onPress={()=>navigation.goBack()}>
            <Ionicons
                name="arrow-back"
                size={28}
                color="white"
              />
          </TouchableOpacity>
          <Text className="text-white text-[24px] font-bold pl-[4px]">
            {i18n.t("transfer_savings")}
          </Text>
        </View>
      </View>
      <View className="h-[90vh] bg-white px-[24px] rounded-t-[24px] py-[24px]">
        {transferValid ? pinValid ? (
          <Results success={true} setDone = {setDone} setRetry = {setRetry}/>
        ) : (
          <PinCode setPinValid = {setPinValid} setTransferValid={setTransferValid}/>
        ) : (
          <Transfer setTransferValid={setTransferValid}/>
        )}
      </View>
    </View>
  );
};

export default TransferSavings;
