import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';

import {useState} from 'react';
import CustomAlert from '../../components/alert';
import CustomButton from '../../components/customeButton';
import IMAGES from '../../assets/Image';

export default function Register({navigation}) {
  const [showAlert, setShowAlert] = useState(false);
  const handleHaveAccount = () => {
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    setShowAlert(true);
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.maincontainer}>
      <View style={styles.mainSubContainer}>
        <Text style={styles.MainText}>Become an Investor</Text>
        <View style={styles.SubContainer}>
          <Text style={styles.InputText}>Name</Text>
          <TextInput placeholder="Enter your name" style={styles.InputBox} />

          <Text style={styles.InputText}>Email</Text>
          <TextInput placeholder="Enter your Email" style={styles.InputBox} />

          <Text style={styles.InputText}>Password</Text>
          <View style={styles.eyeView}>
            <TextInput
              placeholder="Enter your Password"
              // style={styles.InputBox}
            />
            <Image source={IMAGES.eye} />
          </View>
          <Text style={styles.InputText}>Organization</Text>
          <TextInput
            placeholder="Enter your Organization"
            style={styles.InputBox}
          />

          <Text style={styles.InputText}>State</Text>
          <TextInput placeholder="Enter your State" style={styles.InputBox} />

          <Text style={styles.InputText}>City</Text>
          <TextInput placeholder="Enter your City" style={styles.InputBox} />
        </View>
        <View>
          <CustomButton
            title="Register"
            onPress={handleRegister}
            buttonStyle={{
              backgroundColor: '#FFBD59',
              marginTop: 20,
            }}
          />
          <TouchableOpacity onPress={handleHaveAccount}>
            <Text style={styles.alreadyText}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showAlert && (
        <CustomAlert
          message="Thanks for sharing your interest to become an investor with CAN. We’ll reach out to you within next 24-72 hours to assess whether you meet our criteria to become an investor."
          onClose={() => setShowAlert(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    top: -70,
    zIndex: 99,
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginTop: 0,
    borderRadius: 30,
    position: 'relative',
    // height: '100%'
    marginBottom: -60,
  },
  MainText: {
    fontSize: 38,
    alignSelf: 'center',
    marginBottom: -10,
    color: '#000000',
  },
  SubContainer: {
    padding: 10,
  },
  InputText: {
    fontSize: 20,
    marginTop: 5,
  },
  InputBox: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#0A49755E',
  },
  btnContainer: {
    backgroundColor: '#FFBD59',
    justifyContent: 'center',
    alignItems: 'center',
    width: 340,
    padding: 7,
    marginLeft: 5,
    marginTop: 15,
  },
  btnText: {
    alignSelf: 'center',
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  alreadyText: {
    alignSelf: 'center',
    color: '#0A4975',
    // fontWeight: 'bold',
    fontSize: 16,
  },
  mainSubContainer: {
    // backgroundColor: 'red',
    marginTop: -10,
  },
  eyeView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#0A49755E',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
});
