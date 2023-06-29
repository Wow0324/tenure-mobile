import TenurePlatform from "../../assets/svg/The Tenure Platform.svg";
import CashBack from "../../assets/svg/Cash-back.svg";
import RoundUp from "../../assets/svg/Round-up.svg";
import GoalSetting from "../../assets/svg/goal_setting.svg";
import EmployerContributions from "../../assets/svg/employer_contributions.svg";
import i18n from "../locales/localization";
import HomeSliderIcon from "../../assets/svg/home/home_slider.svg";
import Home from "../../assets/svg/home.svg";
import Hospital from "../../assets/svg/health.svg";
import Food from "../../assets/svg/food.svg";
import Plane from "../../assets/svg/plane.svg";
import MasterCard from "../../assets/svg/mastercard.svg";
import Visa from "../../assets/svg/visa.svg";

export const slides = [
  {
    key: 1,
    title: i18n.t("sliders[0].title"),
    text: i18n.t("sliders[0].text"),
    image: TenurePlatform,
    backgroundColor: "#59b2ab",
    isflag: false,
  },
  {
    key: 2,
    title: i18n.t("sliders[1].title"),
    text: i18n.t("sliders[1].text"),
    image: CashBack,
    backgroundColor: "#febe29",
    isflag: false,
  },
  {
    key: 3,
    title: i18n.t("sliders[2].title"),
    text: i18n.t("sliders[2].text"),
    image: RoundUp,
    backgroundColor: "#22bcb5",
    isflag: false,
  },
  {
    key: 4,
    title: i18n.t("sliders[3].title"),
    text: i18n.t("sliders[3].text"),
    image: GoalSetting,
    backgroundColor: "#febe29",
    isflag: false,
  },
  {
    key: 5,
    title: i18n.t("sliders[4].title"),
    text: i18n.t("sliders[4].text"),
    image: EmployerContributions,
    backgroundColor: "#febe29",
    isflag: true,
  },
];

export const HomeSliders = [
  {
    key: 1,
    title: "Starbucks",
    street: "190, Queens street E,Brampton",
    subtitle: "Visit 2 times and save 5%",
    expireddate: "Expires 01/06/2023",
    image: HomeSliderIcon,
  },
  {
    key: 2,
    title: "Starbucks",
    street: "190, Queens street E,Brampton",
    subtitle: "Visit 2 times and save 5%",
    expireddate: "Expires 01/06/2023",
    image: HomeSliderIcon,
  },
  {
    key: 3,
    title: "Starbucks",
    street: "190, Queens street E,Brampton",
    subtitle: "Visit 2 times and save 5%",
    expireddate: "Expires 01/06/2023",
    image: HomeSliderIcon,
  },
  {
    key: 4,
    title: "Starbucks",
    street: "190, Queens street E,Brampton",
    subtitle: "Visit 2 times and save 5%",
    expireddate: "Expires 01/06/2023",
    image: HomeSliderIcon,
  },
  {
    key: 5,
    title: "Starbucks",
    street: "190, Queens street E,Brampton",
    subtitle: "Visit 2 times and save 5%",
    expireddate: "Expires 01/06/2023",
    image: HomeSliderIcon,
  },
];

export const categories = [
  {
    title: "Travel deals",
    description: "Check out the best travel deals we have for you",
    iconColor: "#B77900",
    icon: <Plane color="white" />,
    route : "TravelDeals",
  },
  {
    title: "Retail deals",
    description: "Check out the best retail deals we have for you",
    iconColor: "#144642",
    icon: <Home color="white" />,
    route : "RetailDeals",
  },
  {
    title: "Food deals",
    description: "Check out the best food deals we have for you",
    iconColor: "#653F17",
    icon: <Food color="white" />,
    route : "FoodDeals",
  },
  {
    title: "Health-care  deals",
    description: "Check out the best health-care deals we have for you",
    iconColor: "#972144",
    icon: <Hospital color="white" />,
    route : "HealthDeals",
  },
];

export const cards = [
  {
    name : "Jon Doe",
    number: "1234****1200",
    expiry: "Expires 16/24",
    cvv : "123",
    postalCode : "LD1 5T7",
    Icon: MasterCard,
  },
  {
    name : "Alex Port",
    number: "1234****1200",
    expiry: "Expires 16/24",
    cvv : "654",
    postalCode : "UD1 6T7",
    Icon: Visa,
  },
];