import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/Home/Home';
import ForgotPasswordMessage from '../screens/Forgotpassword/ForgotPasswordMessage/ForgetPasswordMessage';
import {Image} from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({focused, size}) => (
              <Image
                source={require('../Image/logo.png')}
                style={{width: size, height: size}}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ForgotPasswordMessage"
          component={ForgotPasswordMessage}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigation;
