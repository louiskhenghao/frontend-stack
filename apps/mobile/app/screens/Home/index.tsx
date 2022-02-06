import React from 'react';
import { View, Text } from 'react-native';
import { tw } from '@frontend-stack/ui-theme';

export const HomeScreen = () => {
  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <Text>Home</Text>
    </View>
  );
};
