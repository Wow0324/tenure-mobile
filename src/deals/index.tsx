import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { categories } from "../const/default";

const screenWidth = Dimensions.get("window").width;

const Deals = () => {
  const navigation = useNavigation();
  
  // const [categories, setCategories] = useState();

  // const fetchData = () => {
  //   axios.post(`${API_BASIC_URL}/categories`, email)
  //   .then((res) => {
  //     console.log("success")
  //     setCategories(res.data.categories)
  //   })
  //   .catch((error) => {
  //     console.log("error")
  //   })
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  
  return (
    <SafeAreaView className="bg-[#3F7A64] h-[100vh] py-[24px]">
      <View className="h-[10vh] px-[25px] justify-between items-center flex-row">
        <Text className="text-white text-[24px] font-bold pb-[8px]">
          Deals
        </Text>
        <Ionicons
          onPress={() => {
            navigation.navigate("Notifications");
          }}
          name="ios-notifications-circle-outline"
          size={32}
          color="white"
        />
      </View>
      <View className="flex-1 bg-white px-[15px] rounded-t-[24px] py-[24px]">
        <View>
          <Text className="font-bold text-xl">By category</Text>
          <FlatList
            data={categories}
            keyExtractor={(v, index) => index}
            numColumns={2}
            disableVirtualization={true}
            style={{ width: screenWidth }}
            className="mt-4 mb-3 h-[530px] overflow-visible"
            renderItem={({item : {iconColor, icon, title, description, route}}) => (
              <Pressable
                style={styles.dropshadow}
                onPress={() => (navigation.navigate(route))}
                android_ripple={{ color: '#D4B57C' }}
                className="bg-white w-[43%] translate-x-4 mr-5 p-[4px] rounded-md mb-6 translate-y-4  h-[165px]  flex flex-col gap-2">
                <View
                  style={{
                    backgroundColor: iconColor,
                    width: 50,
                    height: 50,
                  }}
                  className="rounded-full flex items-center justify-center flex-row">
                  {icon}
                </View>
                <Text className="font-semibold text-[15px]">{title}</Text>
                <Text className="text-[12px]">{description}</Text>
              </Pressable>
            )}
          />
        </View>
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  dropshadow: {
    marginHorizontal: 4,
    backgroundColor: '#fff',
    // No options forshadow offset, shadow opacity like iOS
    elevation: 5,
    // shadow color
    shadowColor: 'black',
    shadowRadius: 8,
    // work for iOS only
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
  },
});

export default Deals;
