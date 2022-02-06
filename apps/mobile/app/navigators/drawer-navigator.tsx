import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ExampleScreen } from '../screens';
import { Example2Screen } from '../screens';
import { CustomDrawerContent } from '../containers/CustomDrawerContent';

const Drawer = createDrawerNavigator();
export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Example1"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Example1" component={ExampleScreen} />
      <Drawer.Screen name="Example2" component={Example2Screen} />
    </Drawer.Navigator>
  );
};
