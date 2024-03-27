import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import styles from './styles';
import Header from '@components/Headers/Header';
import {useActive_MandateMutation} from '../../redux/services/authServices';
import IMAGES from '@assets/Image';

export default function Home() {
  const [data, setData] = useState([]);

  const [getData] = useActive_MandateMutation();

  useEffect(() => {
    const allData = async () => {
      try {
        const response = await getData();
        const res = response.data.result;
        console.log(response.data.result, '...====>><<');
        setData(res);
      } catch (error) {
        console.error('Error fetching active mandate:', error);
      }
    };
    allData();
  }, []);

  const agendaData = [
    {
      date: '02',
      month: 'NOV',
      events: [
        {
          Meeting: 'Startup World Cup 2022',
          agenda: 'Lorem Ipsum is simply dummy',
          time: '4 PM',
          location: 'Office',
        },
      ],
    },
    {
      date: '02',
      month: 'NOV',
      events: [
        {
          Meeting: 'Startup World Cup 2022',
          agenda: 'Lorem Ipsum is simply dummy',
          time: '4 PM',
          location: 'Office',
        },
      ],
    },
  ];

  const renderAgendaItems = () => {
    return agendaData.map((item, index) => (
      <View key={index} style={styles.agendaItem}>
        <View style={styles.DateContainer}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.month}>{item.month}</Text>
        </View>
        {item.events.map((event, eventIndex) => (
          <View key={eventIndex} style={styles.eventItem}>
            <Text style={styles.Meeting}>{event.Meeting}</Text>
            <Text style={styles.agenda}>{event.agenda}</Text>
            <View style={styles.eventSubContainer}>
              <Image source={IMAGES.clock} style={{marginTop: 2}} />
              <Text style={styles.event}>{event.time}</Text>
              <Image source={IMAGES.location} style={{marginTop: 2}} />
              <Text style={{marginLeft: 5}}>{event.location}</Text>
            </View>
          </View>
        ))}
      </View>
    ));
  };

  const renderItems = () => {
    return data.map((item, index) => (
      <View key={index} style={styles.item}>
        <View style={{flexDirection: 'row'}}>
          <Image source={IMAGES.jerry} />
          <View style={styles.namediscriptionContainer}>
            <Text style={styles.name}>{item.company_name}</Text>
            <Text style={styles.details}>{item.description}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.details}>
            <Text style={styles.boldText}>MRP:</Text> {item.mrr.mrr_amount}{' '}
            {item.mrr.mrr_amount_in}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.boldText}>Round:</Text>
            {item.round_size.round_size_amount}{' '}
            {item.round_size.round_size_amount_in}
          </Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.details}>
            <Text style={styles.boldText}>Valuation:</Text>{' '}
            {item.valuation.valuation_amount}{' '}
            {item.valuation.valuation_amount_in}
          </Text>
          <Text style={styles.details}>
            <Text style={styles.boldText}>Commitment:</Text>{' '}
            {item.commitment.commitment_amount}
            {item.commitment.commitment_amount_in}
          </Text>
        </View>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Header />
      <Text style={styles.text}>Active Mandate</Text>
      <View style={{flex: 1}}>{renderItems()}</View>

      <View style={{flex: 1}}>
        <Text style={styles.CalendarText}>Calendar</Text>
        {renderAgendaItems()}
      </View>
    </ScrollView>
  );
}
