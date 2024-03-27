import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '@screens/Register/Register';
import Login from '@screens/login/Login';
import ForgotPasswordEmail from '@screens/Forgotpassword/ForgotpasswordEmail/ForgotpasswordEmail';
import ForgotPasswordMessage from '@screens/Forgotpassword/ForgotPasswordMessage/ForgetPasswordMessage';
import CustomHeader from '@components/Headers/CustomHeader';
import {verticalScale} from '../Utills/Metrics';
import DrawerNavigation from './DrawerNavigator';
import HaveQuestions from '@screens/Forum/ForumComponent/HaveQuestions/HaveQuestions';
import Valuation from '@screens/Forum/ForumComponent/Valuation/Valuation';
import Forum from '@screens/Forum/Forum';
import Slider from '@screens/Slider/Slider';
import AnsQues from '../screens/Forum/ForumComponent/AnsQues/AnsQues';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const isLoggedIn = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Stack.Navigator
          initialRouteName="Slider"
          screenOptions={{
            headerShown: false,
            headerTintColor: '#fff',
          }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordEmail}
            options={{
              header: () => <CustomHeader height={verticalScale(343)} />,
              title: 'Forgot Password',
              headerStyle: {height: verticalScale(200)},
            }}
          />
          <Stack.Screen
            name="ForgotPasswordMessage"
            component={ForgotPasswordMessage}
            options={{
              header: () => <CustomHeader height={verticalScale(343)} />,
              title: 'Forgot Password Message',
              headerStyle: {height: verticalScale(200)},
            }}
          />
          <Stack.Screen name="Home" component={DrawerNavigation} />
          <Stack.Screen name="Valuation" component={Valuation} />
          <Stack.Screen name="HaveQuestions" component={HaveQuestions} />
          <Stack.Screen name="AnsQues" component={AnsQues} />
          <Stack.Screen name="Formu" component={Forum} />
          <Stack.Screen name="Slider" component={Slider} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            headerTintColor: '#fff',
          }}>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordEmail}
            options={{
              header: () => <CustomHeader height={verticalScale(343)} />,
              title: 'Forgot Password',
              headerStyle: {height: verticalScale(200)},
            }}
          />
          <Stack.Screen
            name="ForgotPasswordMessage"
            component={ForgotPasswordMessage}
            options={{
              header: () => <CustomHeader height={verticalScale(343)} />,
              title: 'Forgot Password Message',
              headerStyle: {height: verticalScale(200)},
            }}
          />
          <Stack.Screen name="Home" component={DrawerNavigation} />
          <Stack.Screen name="Valuation" component={Valuation} />
          <Stack.Screen name="HaveQuestions" component={HaveQuestions} />
          <Stack.Screen name="AnsQues" component={AnsQues} />
          <Stack.Screen name="Formu" component={Forum} />
          {/* <Stack.Screen name="Slider" component={Slider} /> */}
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default StackNavigation;
