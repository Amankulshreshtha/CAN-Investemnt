/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useDispatch, useSelector} from 'react-redux';
import {registerUser, fetchStates} from '../../redux/action/action';
import CustomAlert from '../../components/CustomAlert/CustomAlert';
import CustomButton from '@components/customeButton';
import IMAGES from '@assets/Image';
import styles from './styles';
import {Formik} from 'formik';
import {validationSchema} from '../../components/yup/validationSchemas';
import {useFetchDataQuery} from '../../redux/services/authServices';
import {useRegisterUserMutation} from '../../redux/services/authServices';
import Header from '../../components/Headers/Header';
import CalendarHeader from 'react-native-calendars/src/calendar/header';
import CustomHeader from '../../components/Headers/CustomHeader';

export default function Register({navigation}) {
  const [showAlert, setShowAlert] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const {data, isError} = useFetchDataQuery();
  const [RegisterUserMutation] = useRegisterUserMutation();
  const states = useSelector(state => state.auth.allStates);
  // console.log('=====> states', states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  const handleHaveAccount = () => {
    navigation.navigate('Login');
  };
  const registerData = async values => {
    const formData = new FormData();
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });

    const totalEntries = formData.entries().length;
    console.log('Total entries:', totalEntries);
  };

  const handleRegister = async values => {
    try {
      const data = await RegisterUserMutation(values);
      console.log(data, '<===== data');
      setShowAlert(true);
    } catch (error) {}
  };

  const handleContinue = () => {
    setShowAlert(false);
    navigation.navigate('Login');
  };
  const fetchDataQuery = useFetchDataQuery();
  const allStates = fetchDataQuery?.data.result || [];
  dispatch(fetchStates(allStates));

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        organization: '',
        state: '',
        city: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <ScrollView style={styles.maincontainer}>
          <CustomHeader height={247} width={'100%'} />
          <View style={styles.mainSubContainer}>
            <Text style={styles.MainText}>Become an Investor</Text>
            <View style={styles.SubContainer}>
              <Text style={styles.InputText}>Name</Text>
              <TextInput
                placeholder="Enter your name"
                style={styles.InputBox}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

              <Text style={styles.InputText}>Email</Text>
              <TextInput
                placeholder="Enter your Email"
                style={styles.InputBox}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <Text style={styles.InputText}>Phone</Text>
              <TextInput
                placeholder="Enter your Phone"
                style={styles.InputBox}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              {touched.phone && errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}

              <Text style={styles.InputText}>Password</Text>
              <View style={styles.eyeView}>
                <TextInput
                  placeholder="Enter your Password"
                  secureTextEntry={!showPass}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <TouchableOpacity
                  style={{marginRight: 5}}
                  onPress={() => setShowPass(!showPass)}>
                  <Image source={IMAGES.eye} />
                </TouchableOpacity>
              </View>
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              <Text style={styles.InputText}>Organization</Text>
              <TextInput
                placeholder="Enter your Organization"
                style={styles.InputBox}
                onChangeText={handleChange('organization')}
                onBlur={handleBlur('organization')}
                value={values.organization}
              />
              {touched.organization && errors.organization && (
                <Text style={styles.errorText}>{errors.organization}</Text>
              )}

              <Text style={styles.InputText}>State</Text>
              <View style={{borderWidth: 0.5, borderRadius: 10}}>
                <Dropdown
                  data={states}
                  labelField="state"
                  valueField="_id"
                  onChange={item => handleChange('state')(item.state)}
                  style={styles.dropDown}
                  placeholder="Select State"
                  placeholderTextColor="rgba(0, 0, 0, 0.27)"
                />
                {touched.state && errors.state && (
                  <Text style={styles.errorText}>{errors.state}</Text>
                )}
              </View>
              <Text style={styles.InputText}>City</Text>
              <TextInput
                placeholder="Enter your City"
                style={styles.InputBox}
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
              />
              {touched.city && errors.city && (
                <Text style={styles.errorText}>{errors.city}</Text>
              )}
            </View>
            <CustomButton
              title="Register"
              onPress={handleSubmit}
              buttonStyle={{
                backgroundColor: '#FFBD59',
                marginTop: 20,
              }}
            />
            <TouchableOpacity onPress={handleHaveAccount}>
              <Text style={styles.alreadyText}>Already have an account?</Text>
            </TouchableOpacity>
          </View>
          {showAlert && (
            <CustomAlert
              message="Thanks for sharing your interest to become an investor with CAN. We’ll reach out to you within next 24-72 hours to assess whether you meet our criteria to become an investor."
              btnTxt="Continue"
              onPress={handleContinue}
              onClose={() => setShowAlert(false)}
            />
          )}
        </ScrollView>
      )}
    </Formik>
  );
}
