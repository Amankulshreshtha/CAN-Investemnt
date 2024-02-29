import {Text, TouchableOpacity, View, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './ForgotPasswordEmailstyles';

const ForgotPasswordEmail = ({navigation}) => {
  const handleResetPassword = () => {
    navigation.navigate('ForgotPasswordMessage');
  };

  const handleCancle = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <Text
        style={{
          fontFamily: 'Nunito',
          fontWeight: '600',
          fontSize: 30,
          color: '#000000',
          marginBottom: 20,
        }}>
        Reset Password
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.txtInputHeading}>Email</Text>
        <TextInput
          placeholder="Enter Email"
          placeholderTextColor="#00000045"
          style={styles.txtInput}
        />
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn1} onPress={handleResetPassword}>
          <Text style={styles.btnTxt}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} onPress={handleCancle}>
          <Text style={styles.btnTxt}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPasswordEmail;
