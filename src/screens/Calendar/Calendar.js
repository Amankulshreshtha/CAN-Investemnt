import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import CustomDrawerHeader from '../../components/CustomDrawerHeader';
import {Calendar} from 'react-native-calendars';
import styles from './styles';
import IMAGES from '../../assets/Image';

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const SectionData = [
    {
      topic: 'Pitch Session 1: Jasper Infotech',
      type: 'Pitch Session',
      time: '4PM',
      location: 'Virtual',
      agenda:
        'Pitch Session for 3 startups: Jasper Infotech, My Home, XYZ housing',
      Meeting: 'https://zoom.us/meeting_id/32432',
      Document: 'PDF',
    },
    {
      topic: 'Pitch Session 2: My Home',
      type: 'Pitch Session',
      time: '4PM',
      location: 'Virtual',
      agenda: 'Pitch Session for My Home',
      Meeting: 'https://zoom.us/meeting_id/32432',
      Document: 'PDF',
    },
    {
      topic: 'Pitch Session 3: My Home',
      type: 'Pitch Session',
      time: '4PM',
      location: 'Virtual',
      agenda: 'Pitch Session for My Home',
      Meeting: 'https://zoom.us/meeting_id/32432',
      Document: 'PDF',
    },
  ];

  const handleMeetingLinkPress = url => {
    Linking.openURL(url);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <CustomDrawerHeader />

        <View style={styles.calendarContainer}>
          <Text style={styles.CalendarText}>Calendar</Text>
          <Calendar
            onDayPress={day => {
              console.log('selected day', day);
              setSelectedDate(day.dateString);
            }}
          />
        </View>
        <View style={styles.selectedDateContainer}>
          <Text style={styles.selectedDateText}>
            {selectedDate ? selectedDate : 'No date selected'}
          </Text>
        </View>
        <View style={styles.subContainer}>
          {SectionData.map((item, index) => (
            <View key={index} style={styles.itemsMainContainer}>
              <Text style={styles.topicText}>{item.topic}</Text>
              <View style={styles.items}>
                <Text style={{fontFamily: 'Nunito-Regular'}}>
                  <Text style={styles.subContainerType}>Type: </Text>
                  {item.type}
                </Text>
                <Text>
                  <Image source={IMAGES.clock} style={styles.Image} />
                  <Text style={styles.subContainerType}>Time: </Text>
                  {item.time}
                </Text>
                <Text style={{}}>
                  <Image source={IMAGES.location} style={styles.Image} />
                  <Text style={styles.subContainerType}>Location: </Text>
                  {item.location}
                </Text>
              </View>
              <Text style={styles.subContainerAgenda}>{item.agenda}</Text>

              <View style={{flexDirection: 'row'}}>
                <Text style={styles.subContainerMeetingText}>
                  Meeting URL:{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => handleMeetingLinkPress(item.Meeting)}>
                  <Text style={styles.subContainerUrl}> {item.Meeting}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.subContainerType}>
                Pitch Docs: {item.Document}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CalendarScreen;
