import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomButton from '../../components/customeButton';
import IMAGES from '../../assets/Image';

const Login = ({navigation}) => {
  handleInvester = () => {
    navigation.navigate('Register');
  };

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginHeading}>Login</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput placeholder="Enter Email" style={styles.txtInput} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Password</Text>
          <View style={styles.inputTxt}>
            <TextInput placeholder="Enter Password" />
            <Image source={IMAGES.eye} style={styles.eyeIcon} />
          </View>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity
            style={styles.forgotBtn}
            onPress={handleForgotPassword}>
            <Text style={styles.btnTxt}>Forgot Password ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotBtn} onPress={handleInvester}>
            <Text style={styles.btnTxt}>Become an Investor</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          title="Login"
          onPress={handleLogin}
          buttonStyle={{
            backgroundColor: '#FFBD59',
            marginTop: 20,
          }}
        />
      </View>
    </View>
  );
};

export default Login;
