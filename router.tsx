import React from "react";
import { View, Text } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import HomeSvg from "./assets/svg/home/home.svg";

import Intro from "./src/intro";
import Signup from "./src/auth/signup";
import Login from "./src/auth/login";
import ForgotPassword from "./src/auth/forgotpassword";
import EmailSent from "./src/auth/emailsent";
import ResetPassword from "./src/auth/resetpassword";
import Confirm from "./src/auth/confirm";
import Welcome from "./src/onboarding/welcome";
import Payment from "./src/onboarding/payment";
import Cardlink from "./src/onboarding/payment/cardlink";
import CardConfirm from "./src/onboarding/payment/confirm";
import RoundUp from "./src/onboarding/rounded_up";
import RoundUpConfirm from "./src/onboarding/rounded_up/confirm";
import Goal from "./src/onboarding/goal";
import Home from "./src/home";
import Savings from "./src/home/savings";
import TransferSavings from "./src/home/transfersavings";
import History from "./src/history";
import Deals from "./src/deals";
import TravelDeals from "./src/deals/TravelDeals/traveldeals";
import TravelDeal from "./src/deals/TravelDeals/traveldeal";
import RetailDeals from "./src/deals/RetailDeals/retaildeals";
import RetailDeal from "./src/deals/RetailDeals/retaildeal";
import FoodDeals from "./src/deals/FoodDeals/fooddeals";
import FoodDeal from "./src/deals/FoodDeals/fooddeal";
import HealthDeal from "./src/deals/HealthDeals/healthdeal";
import HealthDeals from "./src/deals/HealthDeals/healthdeals";
import Notifications from "./src/notifications";
import Settings from "./src/settings";
import PersonalInfo from "./src/settings/personalinfo";
import ChangePassword from "./src/settings/changepassword";
import ChangePinCode from "./src/settings/changepin";
import SettingsLinkCard from "./src/settings/linkcard";
import LinkedCards from "./src/settings/linkedcards";
import NotificationsSettings from "./src/settings/notificationssettings";
import LinkedSuccessfully from "./src/settings/settingslinkedsuccessfully";
import SettingsEditLinkedCard from "./src/settings/editlinkedcard";
import SuccessEditedLinkedCard from "./src/settings/successeditedlinkedcard";

import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#018485', backgroundColor : '#018485' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400',
        color : 'white'
      }}
    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#D4B57C', backgroundColor : '#D4B57C' }}
      text1Style={{
        fontSize: 15,
        color : 'black',
        fontWeight:'400'
      }}
      text2Style={{
        fontSize: 13,
        color:'#666666'
      }}
    />
  )
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EmailSent"
          component={EmailSent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cardlink"
          component={Cardlink}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CardConfirm"
          component={CardConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RoundUp"
          component={RoundUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RoundUpConfirm"
          component={RoundUpConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Goal"
          component={Goal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsCardLink"
          component={SettingsLinkCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsSuccessCardLink"
          component={LinkedSuccessfully}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditLinkedCard"
          component={SettingsEditLinkedCard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessEditedLinkedCard"
          component={SuccessEditedLinkedCard}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

function HomeTabs() {
  return (
    <Stack.Navigator
      initialRouteName="HomeTab"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="HomeTab"
        options={{ headerShown: false }}
        component={Home}
      />
      <Stack.Screen
        name="Savings"
        options={{ headerShown: false }}
        component={Savings}
      />
      <Stack.Screen
        name="TransferSavings"
        options={{ headerShown: false }}
        component={TransferSavings}
      />
    </Stack.Navigator>
  );
}

function DealsTabs() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Deals">
      <Stack.Screen
        name="Deals"
        options={{ headerShown: false }}
        component={Deals}
      />
      <Stack.Screen
        name="TravelDeals"
        options={{ headerShown: false }}
        component={TravelDeals}
      />
      <Stack.Screen
        name="TravelDeal"
        options={{ headerShown: false }}
        component={TravelDeal}
      />
      <Stack.Screen
        name="RetailDeals"
        options={{ headerShown: false }}
        component={RetailDeals}
      />
      <Stack.Screen
        name="RetailDeal"
        options={{ headerShown: false }}
        component={RetailDeal}
      />
      <Stack.Screen
        name="FoodDeals"
        options={{ headerShown: false }}
        component={FoodDeals}
      />
      <Stack.Screen
        name="FoodDeal"
        options={{ headerShown: false }}
        component={FoodDeal}
      />
      <Stack.Screen
        name="HealthDeals"
        options={{ headerShown: false }}
        component={HealthDeals}
      />
      <Stack.Screen
        name="HealthDeal"
        component={HealthDeal}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function SettingsTabs() {
  return (
    <Stack.Navigator
      initialRouteName="SettingTab"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SettingTab"
        options={{ headerShown: false }}
        component={Settings}
      />
      <Stack.Screen
        name="PersonalInfo"
        options={{ headerShown: false }}
        component={PersonalInfo}
      />
      <Stack.Screen
        name="ChangePassword"
        options={{ headerShown: false }}
        component={ChangePassword}
      />
      <Stack.Screen
        name="ChangePinCode"
        options={{ headerShown: false }}
        component={ChangePinCode}
      />
      <Stack.Screen
        name="LinkedCards"
        component={LinkedCards}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotificationsSettings"
        options={{ headerShown: false }}
        component={NotificationsSettings}
      />
    </Stack.Navigator>
  );
}
function HomeStack() {

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#3F7A64',
        tabBarInactiveBackgroundColor: '#3F7A64',
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#B2B2B2',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTabs}
        options={({ route }) => ({
          tabBarAllowFontScaling: true,
          tabBarIcon: ({ color, size, focused }) => (
            <HomeSvg width={size} height={size} opacity={focused ? 1 : 0.5} />
          ),
          tabBarLabel: 'Home',
        })}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="history" size={size} color={color} />
          ),
          tabBarLabel: 'History',
        })}
      />
      <Tab.Screen
        name="DealsTabs"
        component={DealsTabs}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="tags" size={size} color={color} />
          ),
          tabBarLabel: 'Deals',
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsTabs}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" size={size} color={color} />
          ),
          tabBarLabel: 'Settings',
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{ tabBarButton: () => null, headerShown: false }}
      />
    </Tab.Navigator>
  )
}

export default Router;
