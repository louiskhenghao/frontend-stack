// fix: broken @types/react-native https://github.com/brunolemos/react-native-web-monorepo/pull/76
import "react-native";

declare module "react-native" {
  namespace AppRegistry {
    function registerComponent(
      appKey: string,
      componentProvider: () => React.ComponentType
    ): void;
    function getApplication(appKey: string): { getStyleElement: () => string };
  }
}
