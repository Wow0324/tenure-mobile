import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import i18n from "./locales/localization";
import { slides } from "./const/default";

const Intro = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const [press, setPress] = useState(false);
  const [outlinepress, setOutlinePress] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);

  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={{ paddingHorizontal: 20 }}>
        <View className="h-[40vh] flex-row justify-center items-center">
          <item.image width={200} height={200} />
          {/* <Image source={item.image} /> */}
        </View>
        <View className = "flex">
          <View style={styles.content}>
            <View>
              <Text className="text-[32px] font-bold text-center leading-[36px] pb-4 text-[#010101]">
                {item.title}
              </Text>
              <Text className="text-[16px] leading-[20px]">{item.text}</Text>
            </View>
          </View>
          {item.isflag ? (
            <View>
              <View
                style={{ marginTop: 20 }}
                className={press ? "border-2 border border-[#3F7A64] rounded-lg" : "border-0"}>
                <Pressable
                  style={[{ height: 44, margin: 2 }]}
                  className="m-2"
                  className="bg-[#3F7A64] flex-row items-center justify-center rounded-lg"
                  onPress={() => navigation.navigate("Signup")}
                  onPressIn={() => setPress(!press)}
                  onPressOut={() => setPress(!press)}>
                  <Text style={styles.btntitle}>{i18n.t("signup")}</Text>
                </Pressable>
              </View>
              <View
                style={{ marginTop: 20 }}
                className={outlinepress ? "bg-[#E0F8E5]" : null}>
                <Pressable
                  style={[{ height: 44, margin: 2 }]}
                  className="border-[#3F7A64] border border-2 flex-row items-center justify-center rounded-lg"
                  onPressIn={() => setOutlinePress(!outlinepress)}
                  onPressOut={() => setOutlinePress(!outlinepress)}
                  onPress={() => navigation.navigate("Login")}>
                  <Text className="text-[#3F7A64] font-bold text-[16px]">
                    {i18n.t("login")}
                  </Text>
                </Pressable>
              </View>
            </View>
          ) : null}
        </View>
      </View>
    );
  };

  const _renderPrevButton = () => {
    return(
      <View
           
            className="flex-row justify-center items-center h-[40px]">
            <MaterialCommunityIcons
              name="chevron-left"
              size={20}
              color="#3F7A64"
            />
            <Text className=" text-[#3F7A64] text-[16px] leading-[24px] pr-[10px]">
              {sliderIndex == 4 ? i18n.t("go_back") : i18n.t("previouse")}
            </Text>
          </View>
    )
  }

  const _renderNextButton = () => {
    return(
      <View
            className="border-0 flex-row justify-center items-center bg-[#3F7A64] h-[40px] rounded-lg px-2" >
            <Text className=" text-white text-[16px] leading-[24px] align-middle pr-1">
              {i18n.t("next")}
            </Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="white"
            />
          </View>
    )
  }

  const onSlideChange = index => {
    setSliderIndex(index);
  };

  return (
    <View style={styles.container} className="h-[100vh]">
      <View className="h-[98vh]">
        {showRealApp ? (
          <Intro />
        ) : (
          <AppIntroSlider
            renderItem={renderItem}
            data={slides}
            // onDone={onDone}
            showPrevButton={true}
            showDoneButton={false}
            renderNextButton={_renderNextButton}
            renderPrevButton={_renderPrevButton}
            activeDotStyle={{ backgroundColor: "#3F7A64" }}
            dotStyle={{ backgroundColor: "#B2B2B2" }}
            onSlideChange={onSlideChange}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "#5A5A5A",
    textAlign: "center",
    paddingBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#5A5A5A",
    textAlign: "center",
  },
  image: {
    flexDirection: "row",
    justifyContent: "center",
    // height: "55%",
    alignItems: "flex-end",
  },
  content: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  btntitle: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  container: {
    backgroundColor: "#F5F5F5",
    height: "100%",
  },
});

export default Intro;
