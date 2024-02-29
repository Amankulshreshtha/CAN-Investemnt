import React from 'react';
import {Text, TextInput, View, ScrollView} from 'react-native';
import styles from './styles';
import CustomDrawerHeader from '../../components/CustomDrawerHeader';
import CustomButton from '../../components/customeButton';

const Referal = () => {
  const data = [
    {
      name: 'Jerry I',
      Date: '02/22/3321',
      Email: 'aman@gmail.com',
      mobile: 94373829373,
    },
    {
      name: 'Jerry I',
      Date: '02/22/3321',
      Email: 'aman@gmail.com',
      mobile: 94373829373,
    },
    {
      name: 'Jerry I',
      Date: '02/22/3321',
      Email: 'aman@gmail.com',
      mobile: 94373829373,
    },
    {
      name: 'Jerry I',
      Date: '02/22/3321',
      Email: 'aman@gmail.com',
      mobile: 94373829373,
    },
    {
      name: 'Jerry I',
      Date: '02/22/3321',
      Email: 'aman@gmail.com',
      mobile: 94373829373,
    },
  ];

  const handleSubmit = () => {
    console.log('first');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.mainContainer}>
        <CustomDrawerHeader />
        <View style={styles.subContainer}>
          <Text style={styles.heading}>
            Refer someone whom you think can be part of CAN
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Name</Text>
            <TextInput placeholder="Enter Name" style={styles.txtInput} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Email</Text>
            <TextInput placeholder="Enter Email" style={styles.txtInput} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Phone</Text>
            <TextInput placeholder="Enter Phone" style={styles.txtInput} />
          </View>
          <CustomButton title="Submit" onPress={handleSubmit} />
        </View>

        <View>
          <Text style={styles.referralHeading}>My Referrals</Text>
          {/* Render data here */}
          {data.map((item, index) => (
            <View key={index} style={styles.referralItem}>
              <View style={styles.subContainerItem}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.Date}>{item.Date}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.email}>{item.Email}</Text>
                <Text style={styles.email}>{item.mobile}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Referal;
