import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../screens/Register/Register';

import Login from '../screens/login/Login';
import ForgotPasswordEmail from '../screens/Forgotpassword/ForgotpasswordEmail/ForgotpasswordEmail';
import ForgotPasswordMessage from '../screens/Forgotpassword/ForgotPasswordMessage/ForgetPasswordMessage';
import Home from '../screens/Home/Home';
import CustomeHeader from '../components/CustomHeader';

const Stack = createStackNavigator();

const InvestStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // header: () => <CustomHeader />,
          headerStyle: {backgroundColor: '#0A4975', height: 200},
          headerTintColor: '#fff',
        }}>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            header: () => <CustomHeader height={230} />,
            title: 'Register',
            headerStyle: {height: 300},
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => <CustomHeader height={240} />,
            title: 'Login',
            headerStyle: {height: 300},
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordEmail}
          options={{
            header: () => <CustomHeader height={300} />,
            // headerShown: false,
            title: 'Forgot Password',
            headerStyle: {height: 200},
          }}
        />

        <Stack.Screen
          name="ForgotPasswordMessage"
          component={ForgotPasswordMessage}
          options={{
            header: () => <CustomHeader height={300} />,
            // headerShown: false,
            title: 'Forgot Password Message',
            headerStyle: {height: 200},
          }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            // header: () => <CustomHeader height={80} />,
            headerShown: false,
            title: 'Home',
            headerStyle: {height: 1},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default InvestStackNavigation;
