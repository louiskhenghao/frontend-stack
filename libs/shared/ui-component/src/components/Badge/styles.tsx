// import { tw } from "@ui/theme";
import classnames from 'classnames';
import { StyleSheet } from 'react-native';
// import { getTextStyle, getViewStyle } from "../../helpers";
import { Props } from './props';

export const useStyles = (props: Props & { children?: any }) => {
  const {
    size = 'xs',
    type = 'primary',
    style,
    text,
    rounded,
    children,
    className,
    textClassName,
    containerClassName,
    textColor,
    backgroundColor,
    textStyle = {},
    containerStyle = {},
  } = props;

  const hasContent = !!text || !!children;
  const inTextStyle = { color: textColor }; // getTextStyle({ type, size }, { color: textColor });
  const inViewStyle = { color: backgroundColor }; // getViewStyle({ type, size }, { color: backgroundColor });

  // wrapper styles
  const wrapperStyles = StyleSheet.flatten([
    // tw(classnames("flex-row", containerClassName)),
    containerStyle,
  ]);

  // view styles
  const viewStyles = [
    inViewStyle,
    // tw(
    //   classnames(
    //     "items-center justify-center content-center",
    //     {
    //       "rounded-lg": hasContent,
    //       "rounded-full": !hasContent || rounded,
    //       "w-2 h-2": !hasContent,
    //       "p-1": size === "xs",
    //       "p-1.5": size === "sm",
    //       "p-2": size === "md",
    //       "p-2.5": size === "lg",
    //       "px-2.5": hasContent,
    //       "px-2": hasContent && size === "xs",
    //       "px-3": hasContent && size === "lg"
    //     },
    //     className
    //   )
    // ),
    style,
  ];

  // text styles
  const textStyles = StyleSheet.flatten([
    inTextStyle,
    // tw(classnames(textClassName)),
    textStyle,
  ]);

  return {
    wrapperStyles,
    viewStyles,
    textStyles,
  };
};

// ================= EXPORTS
export default useStyles;
