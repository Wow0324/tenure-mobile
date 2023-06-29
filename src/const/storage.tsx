import AsyncStorage from '@react-native-async-storage/async-storage'

// Save the pin code value to local storage
export const savePinCodeToLocalStorage = async (pinCode : string) => {
  try {
    await AsyncStorage.setItem('pinCode', pinCode);
    console.log('Pin code saved successfully!');
  } catch (error) {
    console.log(`Error saving pin code: ${error}`);
  }
};

// Retrieve the pin code value from local storage
export const getPinCodeFromLocalStorage = async () => {
  try {
    const pinCode : string | null = await AsyncStorage.getItem('pinCode');
    if (pinCode !== null) {
      console.log('Pin code retrieved successfully!');
      return pinCode;
    } else {
      console.log('Pin code not found!');
      return "";
    }
  } catch (error) {
    console.log(`Error retrieving pin code: ${error}`);
    return "";
  }
};