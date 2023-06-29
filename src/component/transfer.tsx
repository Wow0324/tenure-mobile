import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useValidation } from 'react-native-form-validator';
import i18n from "../locales/localization";

function Transfer(props) {
  // input transfer values
  const [amount, setAmount] = useState('4000');
  const [name, setName] = useState('Jane Doe');
  const [email, setEmail] = useState('janedoe1@email.com');
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
  
  useValidation({
    state: { amount ,name, email},
  });

  const onTransfer = () => {
    const valid = validate({
      amount: { minlength:1,required: true },
      name: { minlength:1,required: true },
      email: { minlength:1,required: true }
    });
    props.setTransferValid(valid);
  };

  return (
    <View className = "flex-col mt-1">
        <Text className="text-[18px] pb-[15px]">{i18n.t("transaction_details")}</Text>

        <TextInput
          onChangeText={setAmount} value={amount}
          label="Enter an amount"
          name="transfer_amount"
          placeholder="Enter an amount"
          className={isFieldInError('amount') ? "border border-1 h-[40px] rounded-lg border-red-600 px-2 my-[4px]" : "border border-1 h-[40px] rounded-lg border-[#B2B2B2] px-2 my-[4px]"}
        />
        {isFieldInError('amount') && (
            <Text className = "text-red-600">{i18n.t("required_field")}</Text>
        )}

        <TextInput
          onChangeText={setName} value={name}
          label="beneficiary"
          name="beneficiary"
          placeholder="Enter beneficiary name"
          className={isFieldInError('beneficiary') ? "border border-1 h-[40px] rounded-lg border-red-600 px-2 my-[4px]" : "border border-1 h-[40px] rounded-lg border-[#B2B2B2] px-2 my-[4px]"}
        />
        {isFieldInError('beneficiary') && (
            <Text className = "text-red-600">{i18n.t("required_field")}</Text>
        )}

        <TextInput
          onChangeText={setEmail} value={email}
          label="beneficiary1"
          name="beneficiary1"
          placeholder="Enter beneficiary name"
          className={isFieldInError('beneficiary1') ? "border border-1 h-[40px] rounded-lg border-red-600 px-2 my-[4px]" : "border border-1 h-[40px] rounded-lg border-[#B2B2B2] px-2 my-[4px]"}
        />
        {isFieldInError('beneficiary1') && (
            <Text className = "text-red-600">{i18n.t("required_field")}</Text>
        )}

        <TextInput
          label="description"
          name="description"
          placeholder="Enter description (optional)"
          className="border border-1 h-[40px] rounded-lg border-[#B2B2B2] px-2 my-[4px]"
        />
        
        <TouchableOpacity
          className="flex-row w-[100%] justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg mb-[20px] mt-4"
          onPress={onTransfer}>
          <Text className="text-white text-[16px] font-bold pl-1">
            {i18n.t("transfer")}
          </Text>
        </TouchableOpacity>          
    </View>
  );
}

export default Transfer
