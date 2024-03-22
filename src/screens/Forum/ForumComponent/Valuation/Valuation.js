import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Styles';
// import CustomDrawerHeader from '@components/Headers/CustomDrawerHeader';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Header from '@components/Headers/Header';
import {useLazyValuationQuery} from '../../../../redux/services/authServices';
import {useSelector} from 'react-redux';

const Valuation = ({navigation}) => {
  const [question, setquestion] = useState([]);
  const [data] = useLazyValuationQuery();

  const hadleHaveQuestion = () => {
    navigation.navigate('HaveQuestions');
  };
  const hadleAnsQus = () => {
    navigation.navigate('AnsQues');
  };

  const Category_id = useSelector(state => state.auth.formuData._id);
  console.log(Category_id, 'Category_id');

  const fetchValuation = async () => {
    try {
      const response = await data(Category_id);
      const question = response.data.result;
      console.log(question, '==========responce');
      setquestion(question);
    } catch (err) {
      console.log('Error fetching question:', err);
    }
  };
  useEffect(() => {
    fetchValuation();
  }, []);

  const renderdetailData = ({item}) =>
    item.ans ? (
      <View style={styles.dataContainer}>
        <Text style={styles.ques}>{item.quetion}</Text>
        <Text style={styles.ans}>{item.ans}</Text>
      </View>
    ) : (
      <View style={styles.dataContainer}>
        <TouchableOpacity onPress={() => hadleAnsQus(item)}>
          <Text style={styles.ques}>{item.quetion}</Text>
          <Text style={styles.ans}>Add an answer</Text>
        </TouchableOpacity>
      </View>
    );

  return (
    <SafeAreaProvider>
      <View style={styles.mainContainer}>
        <Header showDrawer={false} showBackButton={true} />
        <View style={styles.subContainer}>
          <Text style={styles.heading}>Valuations & MRR</Text>
          <View style={styles.forumDataList}>
            <FlatList
              data={question}
              renderItem={renderdetailData}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>

          <View style={styles.queryContainer}>
            <TouchableOpacity onPress={hadleHaveQuestion}>
              <Text style={styles.query}>Have any Questions?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaProvider>
  );
};

export default Valuation;
