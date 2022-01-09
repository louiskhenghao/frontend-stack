import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';
import { Svg, Circle, Rect, SvgUri, SvgCssUri } from 'react-native-svg';
import Logo from '@frontend-stack/shared/assets/images/logo.svg';
import { HelloWorld } from '@frontend-stack/shared/components';
import { useTranslation } from '../../i18n';

export const ExampleScreen = () => {
  const { t } = useTranslation('common');
  return (
    <View style={tw`flex-1 justify-center items-center`}>
      <Text>
        {t('common:hello')} from {t('common:brand')}
      </Text>
      <Logo />
      <HelloWorld />
      <Svg height="250" width="250" viewBox="0 0 100 100">
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Rect
          x="15"
          y="15"
          width="70"
          height="70"
          stroke="red"
          strokeWidth="2"
          fill="yellow"
        />
      </Svg>
      <SvgUri
        width="250"
        height="250"
        uri="http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg"
      />
      <SvgCssUri
        width="250"
        height="250"
        uri="http://thenewcode.com/assets/svg/accessibility.svg"
      />
    </View>
  );
};
