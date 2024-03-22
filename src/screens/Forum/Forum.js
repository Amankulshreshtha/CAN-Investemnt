import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Header from '@components/Headers/Header';
import {useDispatch, useSelector} from 'react-redux';
import styles from './styles';
import {useFormuDataQuery} from '../../redux/services/authServices';
import {formuData} from '../../redux/action/action';
const Forum = ({navigation}) => {
  const [forumData, setForumData] = useState([]);
  const {data, error} = useFormuDataQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchForumData() {
      try {
        const FormuData = await data?.result;
        console.log('FormuData', FormuData);

        const ids = forumData.map(item => item._id);
        console.log(ids, 'hello .........<<<<<');
        setForumData(FormuData);
      } catch (error) {
        console.error('Error fetching forum data:', error);
      }
    }
    fetchForumData();
  }, []);
  const Data = item => {
    console.log('======items', item);
    navigation.navigate('Valuation');
    dispatch(formuData(item));
  };

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <TouchableOpacity onPress={() => Data(item)}>
        <Text style={styles.title}>{item.category_name}</Text>
        <Text style={styles.text}>{item.description}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>Forum</Text>
        <View style={styles.forumDataList}>
          <FlatList
            data={forumData}
            renderItem={renderForumData}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default Forum;
