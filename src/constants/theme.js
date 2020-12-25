import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const COLORS = {
  black: "#1E1F20",
  white: "#FFFFFF",
  gray: "#6A6A6A",
  red: "#bb161c",
  lightRed:"#FFF2F3",
  lightGray:"#EFEFEF"
};

export const SIZES = {
  // global sizes
  margin: 10,
  font: 14,
  radius: 10,
  padding: 20,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 12,

  // app dimensions
  width,
  height
};

export const FONTS = {
  h1: { fontFamily: "OpenSans-Bold", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "OpenSans-Bold", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "OpenSans-Bold", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "OpenSans-Bold", fontSize: SIZES.h4, lineHeight: 22 },
  body1: { fontFamily: "OpenSans-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "OpenSans-Regular", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "OpenSans-Regular", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "OpenSans-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const theme = { COLORS, SIZES,FONTS };

export default theme;