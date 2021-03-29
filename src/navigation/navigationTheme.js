import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/Colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
    primary: colors.white,
  },
};
