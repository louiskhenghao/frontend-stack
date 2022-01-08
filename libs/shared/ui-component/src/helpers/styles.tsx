// import { tw } from "@ui/theme";
import includes from 'lodash/includes';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { StyleType, ViewSizing } from '../@types';

export const getTextStyle = (
  props: {
    type?: StyleType;
    size?: ViewSizing;
  },
  custom?: {
    color?: string;
  }
): StyleProp<TextStyle> => {
  const { size = 'md', type = 'white' } = props;
  const customColor = custom?.color;
  let colorKey = 'white';
  const sizeKey = size === 'md' ? 'base' : size;
  if (includes(['white', 'warning'], type)) {
    colorKey = 'normal';
  }
  return [
    // tw(`text-${colorKey} text-${sizeKey}`),
    customColor ? { color: customColor } : {},
  ];
};

export const getViewStyle = (
  props: {
    type?: StyleType;
    size?: ViewSizing;
  },
  custom?: {
    color?: string;
  }
): StyleProp<ViewStyle> => {
  const { type = 'white' } = props;
  const customColor = custom?.color;
  const colorKey = type;
  return [
    // tw(`bg-${colorKey}`),
    customColor ? { backgroundColor: customColor } : null,
  ];
};
