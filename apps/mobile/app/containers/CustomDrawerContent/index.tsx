import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { observer } from 'mobx-react-lite';
import { tw } from '@frontend-stack/ui-theme';

export const CustomDrawerContent: React.FC<DrawerContentComponentProps> =
  observer((props) => {
    const onLogout = () => {
      console.log('Logout');
    };

    return (
      <DrawerContentScrollView {...props}>
        <View style={tw('justify-center items-center')}>
          <Image
            style={tw('h-32 w-32')}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg',
            }}
          />
          <Text>I am custom drawer</Text>
        </View>
        <DrawerItemList {...props} />
        {/* Add your custom item here */}
        <Button title="Logout" onPress={onLogout} />
      </DrawerContentScrollView>
    );
  });
