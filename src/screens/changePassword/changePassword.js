import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Header from '@components/Headers/Header';
import CustomButton from '@components/customeButton';
import {useSelector} from 'react-redux';
import {useUpdate_passwordMutation} from '../../redux/services/authServices';

const ChangePassword = ({navigation}) => {
  const [currentpass, setCurrentpass] = useState();
  const [newpass, setNewpass] = useState();
  const [confirmpass, setConfirmpass] = useState();
  const [update_Password] = useUpdate_passwordMutation();

  const id = useSelector(state => state.auth.user.result._id);
  console.log(id, '<===========');

  const params = {
    id: id,
    current_password: currentpass,
    new_password: newpass,
  };

  const handleUpdate = async () => {
    try {
      const updateDetails = await update_Password(params);
      console.log(updateDetails.data.status, 'status=====>>>>');
      if (updateDetails.data.status == true) {
        alert('Password Changed Successfully!');
      } else {
        alert(updateDetails.data.message);
      }
      console.log(updateDetails, "=====>;;''pp;");
    } catch {
      alert('Error in Updating Password');
    }
  };
  console.log(params);
  return (
    <View style={styles.mainContainer}>
      <Header showDrawer={false} showBackButton={true} />
      <View style={styles.subContainer}>
        <Text style={styles.changePassTxt}>Change Password</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.passTxt}>Current Password</Text>
          <TextInput
            placeholder="Enter your current password"
            style={styles.txtInput}
            onChangeText={text => setCurrentpass(text)}
          />
          <Text style={styles.passTxt}>Confirm Current Password</Text>
          <TextInput
            placeholder="Enter current password again"
            style={styles.txtInput}
            onChangeText={text => setConfirmpass(text)}
          />
          <Text style={styles.passTxt}>New Password</Text>
          <TextInput
            placeholder="Enter new password"
            style={styles.txtInput}
            onChangeText={password => setNewpass(password)}
          />
        </View>

        <CustomButton
          title="Update"
          onPress={handleUpdate}
          buttonStyle={{
            backgroundColor: '#FFBD59',
            marginTop: 20,
          }}
          // textStyle
        />
      </View>
      {/* <TabNavigator /> */}
    </View>
  );
};

export default ChangePassword;
