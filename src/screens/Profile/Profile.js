import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Header from '@components/Headers/Header';
import {useProfileDataMutation} from '../../redux/services/authServices';
import {Dropdown} from 'react-native-element-dropdown';
import CustomButton from '@components/customeButton';
import {Calendar} from 'react-native-calendars';
import IMAGES from '@assets/Image';
import {useSelector} from 'react-redux';

const Profile = () => {
  const [isCalendarVisible, setCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [ProfileDataMutation] = useProfileDataMutation();
  const userInfo = useSelector(state => state.auth.user.result);
  const allstate = useSelector(state => state.auth.allStates);
  const [name, setName] = useState(userInfo.name);
  const [email, setEmail] = useState(userInfo.email);
  const [state, setState] = useState(userInfo.state);
  const [city, setCity] = useState(userInfo.city);
  const [organization, setOrganization] = useState(userInfo.organization);
  const [phone, setPhone] = useState(userInfo.phone);

  const params = {
    id: userInfo._id,
    name,
    email,
    organization,
    phone,
    state,
    city,
  };

  const handleUpdate = async () => {
    try {
      const updateData = await ProfileDataMutation(params);
      console.log('====>>>>>.', params);
      console.log(updateData, '<=========');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const handleCalendarPress = () => {
    setCalendarVisible(!isCalendarVisible);
  };

  const onDayPress = day => {
    const formattedDate = `${day.day}-${day.month}-${day.year}`;
    setSelectedDate(formattedDate);
    setCalendarVisible(false);
    // console.log('Selected date:', day);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Header showDrawer={false} showBackButton={true} />
      <View style={styles.subContainer}>
        <Text style={styles.profileTxt}>My Profile</Text>
        <View style={styles.profileContainer}>
          <Image source={IMAGES.camera} style={styles.icon} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.txtInputHeading}>Name</Text>
          <TextInput
            placeholder="Enter Name"
            style={styles.txtInput}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text style={styles.txtInputHeading}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            style={styles.txtInput}
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.txtInputHeading}>Date of birth</Text>
          <View style={styles.dobView}>
            <TextInput
              placeholder="Select Date"
              value={selectedDate}
              editable={false}
            />
            <TouchableOpacity onPress={handleCalendarPress}>
              <Image source={IMAGES.calendar} style={styles.Image} />
            </TouchableOpacity>
          </View>
          {isCalendarVisible && <Calendar onDayPress={onDayPress} />}
          <Text style={styles.txtInputHeading}>Phone</Text>
          <TextInput
            placeholder="Enter Phone"
            style={styles.txtInput}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
          <Text style={styles.txtInputHeading}>Organization</Text>
          <TextInput
            placeholder="Enter Organization"
            style={styles.txtInput}
            value={organization}
            onChangeText={text => setOrganization(text)}
          />
          <Text style={styles.txtInputHeading}>State</Text>
          <Dropdown
            data={allstate}
            placeholder={state}
            labelField="state"
            valueField="_id"
            onChange={item => setState(item.state)}
            style={styles.dropDown}
            value={state}
          />

          <Text style={styles.txtInputHeading}>City</Text>
          <TextInput
            placeholder="Enter City"
            style={styles.txtInput}
            value={city}
            onChangeText={text => setCity(text)}
          />
        </View>
        <CustomButton title="Update" onPress={handleUpdate} />
      </View>
    </ScrollView>
  );
};

export default Profile;
