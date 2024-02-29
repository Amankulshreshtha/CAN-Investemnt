import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomDrawerHeader from '../../components/CustomDrawerHeader';

const AnsQues = ({navigation}) => {
  const handleCancel = () => {
    console.log('first');
  };

  const handlePost = () => {
    console.log('firstQuestion');
  };
  return (
    <View style={styles.mainContainer}>
      <CustomDrawerHeader />
      <View style={styles.subContainer}>
        <Text style={styles.quesTxt}>Category: Valuations & MRR</Text>

        <Text style={styles.helpBtn}>What exactly is MRR?</Text>

        <View style={styles.inputContainer}>
          <View style={styles.txtInputContainer}>
            <Text style={styles.inputTxt}>Response</Text>
            <TextInput
              placeholder="Enter your response"
              style={styles.txtInput}
            />
          </View>

          <Text style={styles.helpTxt}>
            Please be polite while answering the questio. Refer to community
            guidelines for more info.
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn1} onPress={handleCancel}>
            <Text style={styles.btnTxt}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn2} onPress={handlePost}>
            <Text style={styles.btnTxt}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AnsQues;
