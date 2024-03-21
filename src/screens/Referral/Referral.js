import React, {useState, useEffect} from 'react';
import {Text, TextInput, View, ScrollView} from 'react-native';
import styles from './styles';
import Header from '@components/Headers/Header';
import CustomButton from '@components/customeButton';
import {useSelector} from 'react-redux';
import {useRefrealDataMutation} from '../../redux/services/authServices';
import {useLazyFetchReferalDataQuery} from '../../redux/services/authServices';
const Referral = () => {
  const [referrals, setReferrals] = useState([]);
  const id = useSelector(state => state.auth.user.result._id);
  const [data] = useLazyFetchReferalDataQuery();
  const [ReferalData] = useRefrealDataMutation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const fetchReferrals = async () => {
    try {
      const response = await data(id);
      const referral = response.data.result;
      console.log(referral, '==========responce');
      setReferrals(referral);
    } catch (err) {
      console.log('Error fetching referrals:', err);
    }
  };
  useEffect(() => {
    fetchReferrals();
  }, []);

  const params = {
    user_mandate: id,
    name,
    email,
    phone,
  };

  const handleSubmit = async () => {
    console.log('Data===>>', id);
    try {
      const responce = await ReferalData(params).unwrap();
      console.log(responce, 'hcjkwkjqbkqsdjqw');
    } catch {
      alert('Something went wrong! Please try again');
    }

    // setReferrals([...referrals, newReferral]);
    // setName('');
    // setEmail('');
    // setPhone('');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.mainContainer}>
        <Header showDrawer={false} showBackButton={true} />
        <View style={styles.subContainer}>
          <Text style={styles.heading}>
            Refer someone whom you think can be part of CAN
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Name</Text>
            <TextInput
              placeholder="Enter Name"
              style={styles.txtInput}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Email</Text>
            <TextInput
              placeholder="Enter Email"
              style={styles.txtInput}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.txtInputHeading}>Phone</Text>
            <TextInput
              placeholder="Enter Phone"
              style={styles.txtInput}
              value={phone}
              onChangeText={setPhone}
            />
          </View>
          <CustomButton title="Submit" onPress={handleSubmit} />
        </View>

        <View>
          <Text style={styles.referralHeading}>My Referrals</Text>

          {referrals.map((item, index) => (
            <View key={index} style={styles.referralItem}>
              <View style={styles.subContainerItem}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.createdAt}</Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.email}>{item.email}</Text>
                <Text style={styles.mobile}>{item.phone}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Referral;
