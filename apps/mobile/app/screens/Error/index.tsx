import React, { ErrorInfo } from 'react';
import { View, ScrollView, Button, Text } from 'react-native';

export interface ErrorComponentProps {
  error: Error;
  errorInfo: ErrorInfo;
  onReset(): void;
}

/**
 * Describe your component here
 */
// TO-DO: add css later
export const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <View>
      <Text>Bug</Text>
      <ScrollView>
        <Text selectable>{`${props.error}`}</Text>
        {/* <Text selectable text={`${props.errorInfo.componentStack}`} /> */}
      </ScrollView>
      <Button onPress={props.onReset} title="Reload" />
    </View>
  );
};
