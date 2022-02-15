import React from 'react';
import { View, Text } from 'react-native';
import { tw } from '@frontend-stack/ui-theme';

export interface HelloWorldProps {
  title?: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = (props) => {
  return (
    <View style={tw(`bg-primary p-4`)}>
      <Text style={tw(`text-white`)}>Welcome to HelloWorld!</Text>
    </View>
  );
};

export default HelloWorld;
