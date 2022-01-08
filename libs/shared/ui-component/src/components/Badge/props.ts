import { StyleProp, TextStyle, ViewStyle } from "react-native";
import { StyleType, ViewSizing } from "../../@types";

export type Props = {
  className?: string;
  textClassName?: string;
  containerClassName?: string;
  size?: ViewSizing;
  type?: StyleType;
  text?: string;
  rounded?: boolean;
  textColor?: string;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: (...args: any[]) => any;
  disabled?: boolean;
};
