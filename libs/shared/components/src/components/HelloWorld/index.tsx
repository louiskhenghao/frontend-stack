import React from 'react';
import { View, Text } from 'react-native';
// import { useTailwind } from 'tailwind-rn';
// import { tw } from '@frontend-stack/ui-theme';

export interface HelloWorldProps {}

export const HelloWorld: React.FC<HelloWorldProps> = (props) => {
  // const tw = useTailwind();
  return (
    <View>
      <Text>Welcome to HelloWorld!</Text>
    </View>
  );
};

export default HelloWorld;
