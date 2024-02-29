import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles';
import CustomDrawerHeader from '../../components/CustomDrawerHeader';
import IMAGES from '../../assets/Image';

export default function Home() {
  const data = [
    {
      name: 'Jerry Imfotech',
      Text: 'On demand food delivery startup',
      MRP: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
    },
    {
      name: 'Chaiwala',
      Text: 'Authentic Indian Tea',
      MRP: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
    },
  ];

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

  const renderAgendaItem = ({item}) => (
    <View style={styles.agendaItem}>
      <View style={styles.DateContainer}>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.month}>{item.month}</Text>
      </View>

      {item.events.map((event, index) => (
        <View key={index} style={styles.eventItem}>
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
  );

  const renderItem = ({item}) => (
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <Image source={IMAGES.jerry} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.details}>{item.Text}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.details}>
          <Text style={styles.boldText}>MRP:</Text> {item.MRP}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.boldText}>Round:</Text> {item.Round_Size}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.details}>
          <Text style={styles.boldText}>Valuation:</Text> {item.Valuation}
        </Text>
        <Text style={styles.details}>
          <Text style={styles.boldText}>Commitment:</Text> {item.Commitment}
        </Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <CustomDrawerHeader />
      <Text style={styles.text}>Active Mandate</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.CalendarText}>Calendar</Text>
        <FlatList
          data={agendaData}
          renderItem={renderAgendaItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
}
