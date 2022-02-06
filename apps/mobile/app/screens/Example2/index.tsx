import React from 'react';
import { View, Text } from 'react-native';
import { tw } from '@frontend-stack/ui-theme';

export const Example2Screen = () => {
  // ================= HOOKS
  return (
    <View style={tw('flex-1 justify-center items-center')}>
      <Text>Example 2</Text>
    </View>
  );
};
