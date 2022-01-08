import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface HelloWorldProps {}

export function HelloWorld(props: HelloWorldProps) {
  return (
    <View>
      <Text>Welcome to HelloWorld!</Text>
    </View>
  );
}

export default HelloWorld;
