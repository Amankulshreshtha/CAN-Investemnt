import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import CustomDrawerHeader from '../../components/CustomDrawerHeader';

const Forum = () => {
  const forumData = [
    {
      title: 'General Guideline',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Pitch Session',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Valuations & MRR',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'General Guideline',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      title: 'Pitch Session',
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  ];

  const renderForumData = ({item}) => (
    <View style={styles.dataContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <CustomDrawerHeader />
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
