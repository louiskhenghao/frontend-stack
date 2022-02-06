import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ExampleScreen } from '../screens';
import { CustomDrawerContent } from '../containers/CustomDrawerContent';
import { TabNavigator } from './tab-navigator';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Example1"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Example1" component={ExampleScreen} />
      <Drawer.Screen name="Example2" component={TabNavigator} />
    </Drawer.Navigator>
  );
};
