import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '@components/Headers/Header';
import styles from './styles';
import IMAGES from '@assets/Image';
// import {PortfolioData} from '../../redux/api/api';
import {usePortfolioDataQuery} from '../../redux/services/authServices';

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState([]);
  const {data} = usePortfolioDataQuery();

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await data.result;
        console.log(response, 'response====');

        setPortfolioData(response);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };
    fetchPortfolioData();
  }, []);

  const renderItem = ({item}) => (
    <View style={styles.itemData}>
      <View style={{flexDirection: 'row'}}>
        <Image source={IMAGES.jerry} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>{item.company_name}</Text>
          <Text style={styles.text}>{item.description}</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
        }}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Amount:</Text> {item.amount.total_amount}
          {item.amount.total_amount_in}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}># of shares:</Text> {item.number_of_share}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 2,
        }}>
        <Text style={styles.details}>
          <Text style={styles.txt}>At Valuation:</Text>
          {item.valuation.valuation_amount}
          {item.valuation.valuation_amount_in}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.txt}>Round Size:</Text>
          {item.round_size.round_size_amount}
          {item.round_size.round_size_amount_in}
        </Text>
      </View>
      <View style={{marginTop: 2}}>
        <Text style={styles.details}>
          <Text style={styles.txt}>Date of Investment:</Text>
          {item.date}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.subContainer}>
        <Text style={styles.heading}>My Portfolio</Text>

        <FlatList
          data={portfolioData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}
