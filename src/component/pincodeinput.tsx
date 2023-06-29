import React, { useState, useRef, useEffect } from 'react';
import { TextInput, StyleSheet, View, Keyboard } from 'react-native';

const styles = StyleSheet.create({
  pinCodeInput: {
    height: 60,
    width: 60,
    borderColor: '#B2B2B2',
    textAlign: 'center',
    borderWidth: 1,
    fontSize: 20,
    borderRadius: 5,
    marginRight: 10,
  },
  pinCodeInputWithValue: {
    borderColor: '#3F7A64',
  },
  pinCodeInputWithoutValue: {
    borderColor: '#B2B2B2',
  },
  pinCodeInputIncorrect: {
    borderColor: 'red',
  }
});

type PinCodeInputProps = {
  type: string;
  onPinCodeChange: (pinCode: string, isCorrect : boolean) => void;
  originalCode: string;
};

const PinCodeInput = ({ type, onPinCodeChange, originalCode }: PinCodeInputProps) => {
  const [pinCode, setPinCode] = useState(['', '', '', '']);
  const inputsRef = useRef<(TextInput | null)[]>([]);
  const [hasValue, setHasValue] = useState([false, false, false, false]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isValid, setIsValid] = useState(false);
  
  useEffect(() => {
    if (inputsRef.current[0]) {
      inputsRef.current[0]?.focus();
    }
  }, []);

  useEffect(() => {
    // Reset pinCode and hasValue when originalCode changes
    setPinCode(['', '', '', '']);
    setHasValue([false, false, false, false]);
    setIsCorrect(false);
    setIsValid(false)
    inputsRef.current[0]?.focus();
  }, [originalCode]);

  const handlePinCodeChange = (text: string, index: number) => {
    const newPinCode = [...pinCode];
    const newHasValue = [...hasValue];
    newPinCode[index] = text;
    setPinCode(newPinCode);
    newHasValue[index] = text.length > 0;
    setHasValue(newHasValue);
    setIsValid(false);

    // if(index == 0 && !isCorrect) setIsCorrect(true);
    const joinedPinCode = newPinCode.join('');

    if (text && index < 3 && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1]?.focus();
    }
    else {
      if (originalCode !== '') {
        const isCorrect = joinedPinCode === originalCode;
        setIsCorrect(isCorrect);
        setIsValid(true)
        console.log("isValid1", isValid)
        onPinCodeChange(joinedPinCode, isCorrect);
        if (!isCorrect) handlePinCodeSubmit();
      }
      else{
        setIsCorrect(true);
        onPinCodeChange(joinedPinCode, true);
      }

    }
  };

  const handlePinCodeSubmit = () => {
    Keyboard.dismiss();
    if (isCorrect) {
      console.log('Pin Code submitted:', pinCode.join(''));
    } else {
      console.log('Incorrect Pin Code');
      setPinCode(['', '', '', '']);
      setHasValue([false, false, false, false]);
      setIsCorrect(false);
      inputsRef.current[0]?.focus();
    }
  };

  return (
    <View className="w-[100%] flex flex-row justify-center">
      {pinCode.map((value, index) => (
        <TextInput
          key={`${index}`}
          ref={(ref) => {
            inputsRef.current[index] = ref;
          }}
          style={[
            styles.pinCodeInput,
            isValid 
              ? isCorrect 
                ? styles.pinCodeInputWithValue 
                : styles.pinCodeInputIncorrect 
              : hasValue[index] 
              ? styles.pinCodeInputWithValue 
              : styles.pinCodeInputWithoutValue
          ]}
          maxLength={1}
          keyboardType="numeric"
          value={value}
          secureTextEntry={true}
          onChangeText={(text) => handlePinCodeChange(text, index)}
          onSubmitEditing={handlePinCodeSubmit}
        />
      ))}
    </View>
  );
};

export default PinCodeInput;